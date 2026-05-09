function analyzeFlags() {
    const scenario = document.getElementById('scenario').value.trim();
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

    // Einfache Keyword-basierte Analyse (Mock für Demo)
    const lower = scenario.toLowerCase();
    let redFlags = [];
    let greenFlags = [];

    if (lower.includes('ignoriert') || lower.includes('ghost') || lower.includes('nicht antwortet')) {
        redFlags.push('Kommunikation gestört – schlechtes Zeichen');
        redFlags.push('Mögliche emotionale Distanz');
    }
    if (lower.includes('job') || lower.includes('arbeit') || lower.includes('umzug')) {
        greenFlags.push('Neue Chance & Wachstum');
        greenFlags.push('Mut zur Veränderung');
    }
    if (lower.includes('partner') || lower.includes('freund') || lower.includes('beziehung')) {
        if (redFlags.length === 0) greenFlags.push('Offene Kommunikation möglich');
    }
    if (lower.includes('geld') || lower.includes('schulden')) {
        redFlags.push('Finanzielle Unsicherheit');
    }

    // Fallbacks
    if (redFlags.length === 0) redFlags.push('Keine offensichtlichen Warnsignale');
    if (greenFlags.length === 0) greenFlags.push('Positive Aspekte erkennbar');

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

    const score = greenFlags.length - redFlags.length;
    let verdict = score > 0 ? '🌀 GREEN FLAG – Weiter so!' : (score < 0 ? '🚩 RED FLAG – Vorsicht!' : '⚠️ MIXED – Abwägen');
    verdictSpan.textContent = verdict;
    verdictSpan.style.color = score > 0 ? '#2ed573' : (score < 0 ? '#ff4757' : '#ffd93d');

    resultDiv.classList.remove('hidden');
}

function resetApp() {
    document.getElementById('scenario').value = '';
    document.getElementById('result').classList.add('hidden');
}