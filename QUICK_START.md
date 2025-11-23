# ⚡ QUICK START GUIDE

## 🎯 In 3 Schritten zur fertigen App

### Schritt 1: Demo anschauen (JETZT!)
```bash
# Öffne die Demo-Datei im Browser
open demo.html
```
✅ Das zeigt dir die App sofort ohne Setup!

---

### Schritt 2: Vollständige App lokal starten (5 Min)
```bash
# Dependencies installieren
npm install

# Development-Server starten
npm run dev
```
✅ Öffne http://localhost:3000 im Browser

---

### Schritt 3: Online deployen (10 Min)

#### Option A: Vercel (Empfohlen - Kostenlos!)
```bash
# 1. Vercel-Account erstellen auf vercel.com
# 2. Vercel CLI installieren
npm i -g vercel

# 3. Deployen
vercel

# 4. Fragen beantworten mit Enter
# 5. Fertig! Du bekommst eine URL
```

#### Option B: Netlify
```bash
# 1. Build erstellen
npm run build

# 2. Auf netlify.com hochladen
# - Drag & Drop den "out" Ordner
# - Fertig!
```

---

## 📁 Was ist im Projekt?

```
redflag-app/
├── demo.html           ← Sofort im Browser öffnen!
├── README.md          ← Vollständige Dokumentation
├── LAUNCH_GUIDE.md    ← 4-Wochen Launch-Plan
├── pages/
│   └── index.js       ← Hauptapp mit allen Features
├── styles/
│   └── globals.css    ← Styling
└── package.json       ← Dependencies
```

---

## ✨ Features in der App

✅ **50 vorgefertigte Situationen** - Sofort nutzbar!
✅ **Voting-System** - Red Flag oder Green Flag
✅ **Live-Ergebnisse** - Siehe was andere denken
✅ **Submit-Funktion** - User können eigene Situationen posten
✅ **Premium-System** - Freemium-Modell (5 Votes/Tag gratis)
✅ **Dark Mode** - Ästhetisch und modern
✅ **Responsive** - Funktioniert auf allen Geräten
✅ **8 Kategorien** - Dating, Arbeit, Freundschaft, etc.

---

## 🎨 Customization

### Farben ändern:
Bearbeite `tailwind.config.js`:
```javascript
colors: {
  'red-flag': '#FF4458',    // Deine Farbe hier
  'green-flag': '#00D68F',  // Deine Farbe hier
}
```

### Mehr Situationen hinzufügen:
Bearbeite `pages/index.js`, Zeile 4-54:
```javascript
const seedSubmissions = [
  { id: 51, text: "Deine neue Situation", category: "Dating/Relationships", votes: { red: 0, green: 0 } },
  // Füge hier weitere hinzu
];
```

### Kategorien ändern:
Bearbeite `pages/index.js`, Zeile 56:
```javascript
const categories = [
  "Deine Kategorie",  // Füge hier hinzu
  "Dating/Relationships",
  // ...
];
```

---

## 🚀 Nächste Schritte

1. **Demo testen** - Öffne `demo.html`
2. **Lokal starten** - `npm run dev`
3. **Domain kaufen** - z.B. redflagorgreenflag.com
4. **Deployen** - Vercel oder Netlify
5. **Social Media** - TikTok, Instagram accounts erstellen
6. **Content** - 10 Videos vorbereiten
7. **Launch!** 🚀

---

## ❓ Häufige Fragen

**Q: Muss ich programmieren können?**
A: Nein! Die App ist fertig. Du kannst sie direkt deployen.

**Q: Kostet das Hosting Geld?**
A: Nein! Vercel und Netlify sind kostenlos für kleine Projekte.

**Q: Kann ich die Farben/Texte ändern?**
A: Ja! Siehe "Customization" oben.

**Q: Wie füge ich mehr Situationen hinzu?**
A: Bearbeite die `seedSubmissions` Array in `pages/index.js`

**Q: Brauche ich eine Datenbank?**
A: Aktuell nicht! Alles funktioniert lokal. Für Produktiv-Version empfehle ich Supabase (kostenlos).

**Q: Wie mache ich Geld damit?**
A: Siehe `LAUNCH_GUIDE.md` für komplette Monetarisierungs-Strategie!

---

## 🆘 Hilfe gebraucht?

### Tech-Probleme:
- Google nach dem Fehler
- Stack Overflow
- Reddit r/nextjs

### Marketing-Fragen:
- Siehe `LAUNCH_GUIDE.md`
- TikTok Creator Community
- Indie Hackers Forum

---

## 🎉 Ready?

**Du hast jetzt alles was du brauchst!**

1. ✅ Funktionsfähige App
2. ✅ 50 Seed-Situationen
3. ✅ Kompletter Launch-Plan
4. ✅ Marketing-Strategie
5. ✅ Monetarisierungs-Plan

**LOS GEHT'S! 🚀**

---

**Pro-Tip:** Starte mit der Demo (`demo.html`), dann deploye die Full-Version, dann Marketing!

**Du schaffst das! 💪**
