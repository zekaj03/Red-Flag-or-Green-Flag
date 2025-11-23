# 🚩 Red Flag or Green Flag? ✅

Die Community-Plattform für Gen Z, um bei wichtigen Lebensentscheidungen Hilfe zu bekommen!

## 🎯 Features

### ✅ **Aktuell implementiert:**
- 📱 **Feed mit 50 Seed-Situationen** - Vorgefertigte Situationen zum Voten
- 🗳️ **Voting-System** - Swipe oder Click für Red/Green Flag
- 📊 **Live-Ergebnisse** - Siehe sofort was die Community denkt
- ✍️ **Submit-Funktion** - Poste deine eigenen Situationen
- 👤 **My Submissions** - Track deine eingereichten Situationen
- 🎨 **Dark Mode Design** - Ästhetisch und augenfreundlich
- ⭐ **Premium-System** - Freemium-Modell (5 Votes/Tag kostenlos)
- 📂 **8 Kategorien** - Dating, Freundschaft, Arbeit, Familie, etc.

### 🔜 **Für die Zukunft geplant:**
- 💬 Comments-System
- 🔐 User-Authentication (Supabase)
- 🎮 Gamification (Badges, Streaks)
- 📈 Analytics-Dashboard
- 🌍 Internationalisierung
- 📱 Mobile App (React Native)

## 🚀 Installation & Start

### Option 1: Mit Node.js (Empfohlen für Entwicklung)

```bash
# Dependencies installieren
npm install

# Development-Server starten
npm run dev

# Browser öffnen: http://localhost:3000
```

### Option 2: Als statische Website exportieren

```bash
# Build erstellen
npm run build

# Exportieren
npm run export

# Die out/ Ordner enthält die fertige Website
# Diese kann auf Vercel, Netlify, oder jedem Webhost deployt werden
```

### Option 3: Demo-Version (Kein Node.js nötig)

Die Datei `demo.html` im Projekt ist eine Standalone-Version die direkt im Browser geöffnet werden kann!

```bash
# Einfach im Browser öffnen:
open demo.html
```

## 📁 Projekt-Struktur

```
redflag-app/
├── pages/
│   ├── _app.js          # App-Wrapper
│   └── index.js         # Haupt-App mit aller Logik
├── styles/
│   └── globals.css      # Tailwind CSS Styles
├── public/              # Statische Assets
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind-Config
├── next.config.js       # Next.js-Config
└── README.md           # Diese Datei
```

## 🎨 Design-System

### Farben:
- **Red Flag:** `#FF4458`
- **Green Flag:** `#00D68F`
- **Background:** `#1A1A1D`
- **Cards:** `#2D2D30`

### Kategorien:
- 💕 Dating/Relationships
- 👥 Friendship
- 💼 Work/Boss
- 👪 Family
- 🏠 Roommate
- 💰 Money
- 🎓 School/Uni
- 🤷 Other

## 💰 Monetarisierungs-Plan

### Freemium-Modell:
- **FREE:** 5 Votes/Tag, 1 Submit/Woche
- **PREMIUM (4,99€/Monat):** Unlimited Votes, 10 Submits/Monat, Ad-Free

### Weitere Einnahmen:
- 💼 Sponsored Situations (500-2.000€)
- 👕 Merchandise ("Walking Red Flag" T-Shirts)
- 📊 Analytics für Brands
- 🤝 Affiliate-Marketing (Therapy-Apps, Dating-Apps)

### Umsatz-Prognose:
- **Monat 3:** ~5.000€
- **Monat 6:** ~20.000€
- **Monat 12:** ~53.000€

## 🚀 Deployment

### Vercel (Empfohlen - Kostenlos!):
```bash
# Vercel CLI installieren
npm i -g vercel

# Deployen
vercel
```

### Netlify:
```bash
# Build erstellen
npm run export

# Netlify CLI oder Drag & Drop auf netlify.com
```

## 📱 Marketing-Strategie

### Launch Week:
1. **TikTok:** 3 Videos/Tag über Red Flags
2. **Instagram:** Carousel-Posts mit Top-Situations
3. **Reddit:** Organische Posts in r/relationship_advice, etc.

### Viral-Content-Ideen:
- "Let's vote together" (Screen-Recordings)
- "Storytime + Your Vote" (Persönliche Stories)
- "Results Reveal" (Kontroverse Ergebnisse)

## 🛠️ Tech-Stack

- **Frontend:** Next.js 14 + React 18
- **Styling:** TailwindCSS
- **State:** React Hooks (useState, useEffect)
- **Deployment:** Vercel / Netlify
- **Zukunft:** Supabase (Auth + Database)

## 📊 Seed-Data

Die App kommt mit **50 vorgefertigten Situationen** aus verschiedenen Kategorien:
- Dating-Red-Flags ("He checks my phone")
- Green-Flags ("She respects my boundaries")
- Work-Situations ("Boss texts after 10pm")
- Friendship-Issues ("Friend borrowed money")
- Etc.

Jede Situation hat bereits realistische Votes (zwischen 100-900) um die Community aktiv wirken zu lassen.

## 🎯 Nächste Schritte

1. ✅ **Domain kaufen:** redflagorgreenflag.com
2. ✅ **Deployen:** Vercel oder Netlify
3. 📱 **TikTok-Content:** 10 Videos vorbereiten
4. 🚀 **Launch:** Soft-Launch auf Reddit
5. 📈 **Wachstum:** Influencer-Partnerships
6. 💰 **Monetarisierung:** Premium nach 1000 Users

## 📞 Support & Kontakt

Bei Fragen oder Problemen:
- GitHub Issues (wenn public)
- Email: support@redflagorgreenflag.com (später)
- Discord: Community-Server (später)

## 📄 Lizenz

© 2024 Red Flag or Green Flag. Alle Rechte vorbehalten.

---

**Viel Erfolg mit deiner App! 🚀**

Das wird viral gehen! 🔥
