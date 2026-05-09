function analyzeFlags() {
    const scenario = document.getElementById('scenario').value.trim().toLowerCase();
    if (!scenario) {
        alert('Bitte gib ein Szenario ein!');
        return;
    }

    const resultDiv = document.getElementById('result');
    const redList = document.getElementById('red-flags');
    const greenList = document.getElementById('green-flags');
    const verdictSpan = document.getElementById('verdict');

    redList.innerHTML = '';
    greenList.innerHTML = '';

    let redFlags = [];
    let greenFlags = [];
    let score = 0;

    // Erweiterte Logik: Kategorien + Keywords + Gewichtung
    const categories = {
        relationship: {
            red: ['ignoriert', 'ghost', 'nicht antwortet', 'lügt', 'betrügt', 'kontrolliert', 'eifersüchtig', 'streitet ständig', 'keine zeit', 'geheimnisse'],
            green: ['kommuniziert offen', 'unterstützt', 'verbringt zeit', 'respektiert', 'ehrlich', 'gemeinsame ziele', 'lächelt oft', 'hört zu'],
            weight: 2
        },
        career: {
            red: ['keine zukunft', 'toxisch', 'überstunden', 'kein wachstum', 'boss mobbt', 'unsicher', 'burnout'],
            green: ['neue chance', 'wachstum', 'gute kollegen', 'flexibel', 'gute bezahlung', 'lernmöglichkeiten', 'work-life-balance'],
            weight: 1.5
        },
        finance: {
            red: ['schulden', 'geldprobleme', 'versteckte kosten', 'kein budget', 'teuer ohne grund'],
            green: ['spart', 'investiert', 'transparente finanzen', 'gute planung', 'stabile einkünfte'],
            weight: 1
        },
        health: {
            red: ['drogen', 'alkohol', 'kein sport', 'schlechter schlaf', 'stress', 'unhealthy habits'],
            green: ['sportlich', 'gesund', 'ausgewogen', 'mentale gesundheit', 'energie'],
            weight: 1
        },
        social: {
            red: ['isoliert', 'schlechte freunde', 'kein netzwerk', 'negativ', 'manipulativ'],
            green: ['gute freunde', 'familie', 'netzwerk', 'positiv', 'hilfsbereit'],
            weight: 1
        }
    };

    // Prüfe jede Kategorie
    for (const [cat, data] of Object.entries(categories)) {
        data.red.forEach(kw => {
            if (scenario.includes(kw)) {
                redFlags.push(`${kw} (${cat})`);
                score -= data.weight;
            }
        });
        data.green.forEach(kw => {
            if (scenario.includes(kw)) {
                greenFlags.push(`${kw} (${cat})`);
                score += data.weight;
            }
        });
    }

    // Fallbacks & Zufalls-Flags bei wenig Treffern
    if (redFlags.length === 0) {
        redFlags.push('Keine starken Warnsignale erkannt');
    }
    if (greenFlags.length === 0) {
        greenFlags.push('Positive Potenziale vorhanden');
    }

    // Zeige Flags
    redFlags.forEach(flag => {
        const li = document.createElement('li');
        li.textContent = flag;
        redList.appendChild(li);
    });
    greenFlags.forEach(flag => {
        const li = document.createElement('li');
        li.textContent = flag;
        greenList.appendChild(li);
    });

    // Verbessertes Verdikt mit Prozent-Score
    const total = Math.max(redFlags.length + greenFlags.length, 1);
    const percent = Math.round(((score + 10) / 20) * 100); // Normiert auf 0-100
    let verdictText = '';
    let color = '';

    if (percent >= 70) {
        verdictText = `🟢 STARKER GREEN FLAG (${percent}%) – Stark positiv!`;
        color = '#2ed573';
    } else if (percent >= 50) {
        verdictText = `🟢 GREEN FLAG (${percent}%) – Meistens gut`;
        color = '#2ed573';
    } else if (percent >= 30) {
        verdictText = `⚠️ MIXED (${percent}%) – Abwägen`;
        color = '#ffd93d';
    } else {
        verdictText = `🚩 RED FLAG (${percent}%) – Starke Warnsignale`;
        color = '#ff4757';
    }

    verdictSpan.textContent = verdictText;
    verdictSpan.style.color = color;

    resultDiv.style.display = 'block';
}

function resetApp() {
    document.getElementById('scenario').value = '';
    document.getElementById('result').style.display = 'none';
}