# Visapp - Mobiele Viskaart voor Rotterdam, Schiedam & Delft

Een interactieve React web-applicatie waarmee vissers kunnen zien waar zij mogen vissen in Rotterdam, Schiedam en Delft. De app combineert echte waterwegen van OpenStreetMap (via Overpass API) met gedetailleerde visregels en seizoenverboden.

## ✨ Functies

### 🗺️ Interactieve Kaart
- **Kaartoverzicht** met OpenStreetMap via Leaflet.js
- **Gekleurde markers** voor vislocaties:
  - 🟢 **Groen** = Vissen toegestaan (met mogelijk VISpas/vergunning)
  - 🔴 **Rood** = Vissen verboden (haven, drinkwater, natuurreservaten)

### 📍 Fishing Zones
- **Kralingse Plas** (Rotterdam) - VISpas vereist, geen nachtvisserij
- **Delftse Schie** (Delft) - VISpas vereist, nachtvisserij toegestaan
- **Oude Maas** (Schiedam) - VISpas vereist, zalmsteek gesloten
- **Kanaal door Voorne** (Rotterdam) - Vrij vissen!
- **Brassemermeer** (Schiedam) - VISpas vereist
- **Poldervaart** (Schiedam) - Vrij vissen
- **Verboden zones**: Haven, drinkwaterwinning, natuurreservaten

### 🎯 Popup-informatie
Bij klikken op een marker geef je ziet:
- Naam en locatie (stad)
- Status (mag vissen / verboden)
- VISpas-vereiste (ja/nee)
- Nachtvisserij toegestaan (ja/nee)
- Seizoensverboden (bijv. gesloten 1 april - 1 juni)
- Minimale viswmaten
- Speciale regels (bijv. zalmsteek verboden)

### 🌊 Water Features van OpenStreetMap
- Echte waterwegen opgehaald via **Overpass API**
- Rivieren, kanalen, beken weergegeven als blauwe lijnen
- Fallback naar hardcoded data als API niet beschikbaar is

### 📍 GPS & Locatiebepaling
- Knop om jouw huidige locatie te tonen
- Automatisch inzoomen op huidige positie
- Toestemming vereist van gebruiker

### 📋 Legenda
- Duidelijke uitleg van kleuren en iconen
- Tips voor het gebruik van de app
- Altijd zichtbaar links onderin de kaart

### 📱 Mobiel-vriendelijk
- Responsive design voor telefoons en tablets
- Touch-friendly popups
- Geoptimaliseerde performantie op mobiele netwerken
- Automatische aanpassingen voor kleine schermen

### ⚙️ Foutvermijdering
- Laadscherm tijdens ophalen van data
- Foutmeldingen als API niet bereikbaar
- Automatische fallback naar hardcoded vislocaties
- Foutafhandeling met gebruikersvriendelijke meldingen

## 🛠️ Technologie Stack

```
Frontend:
- React 18.2.0           - UI framework
- Vite 5.0.8             - Build tool & dev server
- Leaflet 1.9.4          - Kaart library
- react-leaflet 4.2.1    - React binding voor Leaflet
- Axios 1.6.0            - HTTP client
- CSS3                   - Styling (geen CSS-in-JS)

Backend/DataSources:
- OpenStreetMap (OSM)     - Echte waterwegen data
- Overpass API           - OSM data query endpoint
- Hardcoded fallback     - Bekende vislocaties

Platform:
- JavaScript (geen TypeScript)
- Mobile-first approach
```

## 📦 Installatie & Setup

### Vereisten
- Node.js >= 14.0
- npm of yarn

### Stap-voor-stap installatie

#### 1. Kloon het project
```bash
git clone <repository-url>
cd Visapp
```

#### 2. Installeer dependencies
```bash
npm install
```

#### 3. Start de development server
```bash
npm run dev
```

Dit start een lokale server op `http://localhost:5173` (Vite's standaard poort).
De pagina zal automatisch geopend worden in je browser.

#### 4. Bouw voor productie
```bash
npm run build
```

Dit creëert een geoptimaliseerde build in de `dist/` folder.

#### 5. Preview van productie build
```bash
npm run preview
```

## 🚀 Deployment

### Deploy naar Vercel (aanbevolen)
```bash
# Installeer Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy naar Netlify
1. Push code naar Git (GitHub, GitLab, etc.)
2. Log in op [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Selecteer je repository
5. Build command: `npm run build`
6. Publish directory: `dist`

### Deploy naar GitHub Pages
```bash
# Voeg build output toe aan .gitignore verwijdering
npm run build
git add dist -f
git commit -m "Build for deployment"
git push
```

## 📝 Project Structuur

```
Visapp/
├── index.html                    # HTML entry point
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite configuration
├── README.md                     # Deze file
│
├── src/
│   ├── main.jsx                  # React app entry point
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # App styling
│   ├── index.css                 # Global styles
│   │
│   ├── components/
│   │   ├── FishingMap.jsx         # Hoofd kaart component
│   │   ├── FishingMap.css         # Kaart styling
│   │   ├── Legend.jsx             # Legenda component
│   │   ├── Legend.css             # Legenda styling
│   │   ├── LoadingScreen.jsx      # Laadscherm
│   │   └── LoadingScreen.css      # Laadscherm styling
│   │
│   └── utils/
│       ├── fishingData.js         # Hardcoded vislocaties data
│       ├── api.js                 # Overpass API calls
│       └── mapUtils.js            # Map utilities (markers, geo)
│
└── public/                        # Static assets (optioneel)
```

## 🗺️ Data Bronnen

### Waterfeatures (Overpass API)
**Endpoint:** `https://overpass-api.de/api/interpreter`

**Query:** Haalt alle wateren, rivieren, kanalen in bounding box:
- Zuid: 51.88°N
- West: 4.30°E  
- Noord: 52.02°N
- Oost: 4.55°E

Dit dekt Rotterdam, Schiedam, Delft en omgeving af.

### Visregels Data
Huidige versie gebruikt hardcoded data gebaseerd op:
- **Sportvisserij Nederland** (SVN) regularities
- **VISpas regels** van www.vispas.nl
- **Lokale visregels** van gemeentes Rotterdam, Schiedam, Delft

### Hardcoded Fallback Data
Zie `src/utils/fishingData.js` voor:
- 6 groene zones (mag vissen)
- 3 rode zones (verboden)
- Volledige regelgeving per zone

## 🎮 Gebruikshandleiding

### Kaart gebruiken
1. **Slepen & zoomen** - Sleep met vinger/muis om te navigeren, pinch/scroll om in/uit te zoomen
2. **Klik op marker** - Zie details en regels van vislocatie
3. **Gebruik legenda** - Verstaan kleuren en wat ze betekenen
4. **GPS knop** (📍 rechts bovenin) - Spring naar jouw huidige locatie

### popup lezen
Elke popup bevat:
- **Status badge**: Groen (mag) of rood (verboden)
- **VISpas info**: Ja/nee
- **Nachtvisserij**: Toegestaan/niet toegestaan
- **Seizoensverboden**: Wanneer je niet mag vissen
- **Minimale maten**: Niet van toepassing of maten in cm
- **Overige regels**: Speciale beperkingen

## ⚙️ Configuratie

### Wijzig de kaartcenter/zoom
**File:** `src/utils/fishingData.js`
```javascript
export const MAP_CENTER = {
  lat: 52.0000,
  lng: 4.3700
}

export const INITIAL_ZOOM = 11
```

### Voeg vislocatie toe
**File:** `src/utils/fishingData.js`
```javascript
{
  id: 'mijn-water',
  name: 'Mijn Viswater',
  city: 'Plaats',
  status: 'allowed', // of 'forbidden'
  lat: 52.0123,
  lng: 4.4123,
  rules: {
    requiresVispas: false,
    nightFishing: true,
    seasonalBan: 'Geen',
    minSize: 'Standaard',
    otherRules: 'Geen speciale regels'
  },
  description: 'Beschrijving van het water',
  waterType: 'plas' // of 'rivier', 'kanaal', etc
}
```

### Wijzig kaartlayer
**File:** `src/components/FishingMap.jsx`

Verander TileLayer URL:
```javascript
// Huidiglg OpenStreetMap:
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

// Alternatief - Satellite:
url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
```

## 🐛 Troubleshooting

### "Kaart laadt niet"
- Check internet verbinding
- Verifieer dat `https://overpass-api.de` bereikbaar is
- Probeer cache legen (F5 refresh)
- Check browser console voor errors (F12)

### "GPS/Locatie werkt niet"
- Zorg dat HTTPS gebruikt wordt (lokale dev OK)
- Geef toestemming voor locatiebepaling
- Controleer firewall/VPN instellingen
- Werkt mogelijk niet in Incognito mode

### "Popups werken niet goed op mobiel"
- Controleer touch-friendly instellingen
- Zorg voor genoeg schermruimte
- Update browser naar nieuwste versie
- Probeer Portrait mode

### "API calls falen"
- Overpass API kan rate-limited zijn
- Wacht enkele seconden en vernieuw
- App fallback naar hardcoded data automatisch
- Check dat bounding box correct is in `src/utils/api.js`

## 📊 Performance

- **Initial load**: ~2-3 seconden (afhankelijk van internet)
- **API calls**: Gecached in Overpass API (25s timeout)
- **Mobile optimization**: <1MB initial bundle
- **Popups**: Instant responsief

### Optimalisatietips
- Vite build gebruikt code splitting
- Lazy loading van components
- CSS minified in production
- Network requests gecombineerd

## 🔒 Privacy & Veiligheid

- **Geen server/backend** - Pure client-side
- **GPS locatie** - Enkel lokaal, niet verzonden
- **API calls** - Only OpenStreetMap Overpass (public)
- **No tracking** - Geen analytics of tracking

## 📄 Licentie

Dit project is beschikbaar onder de MIT Licentie - zie LICENSE file voor details.

OpenStreetMap data is beschikbaar onder ODbL licentie.

## 🤝 Bijdragen

Bijdragen zijn welkom! Stappen:
1. Fork het project
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je changes (`git commit -m 'Add AmazingFeature'`)
4. Push naar branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request

## 📞 Contact & Support

Voor vragen, bugs of suggesties:
- Open een GitHub Issue
- Controleer bestaande issues eerst
- Beschrijf je probleem duidelijk met stappen om te reproduceren

## 🗺️ Roadmap

Toekomstige functies:
- ✅ Basis kaart met markers
- ✅ Popups met regelinfo
- ✅ GPS locatie
- ✅ Hardcoded fallback
- ⏳ Live VISpas data integratie
- ⏳ Filters op regeltype (VISpas, nachtvisserij, etc)
- ⏳ Favorieten opslaan (localStorage)
- ⏳ Offline mode
- ⏳ Multi-taal (EN, FR, DE)
- ⏳ Water conditions API (temperatuur, doorstroming)
- ⏳ Social features (foto's, reviews)

## ✅ Testen

```bash
# Development mode met hot reload
npm run dev

# Production build test
npm run build
npm run preview

# Check errors
npm run build  # Output naar console
```

## 📚 Documentatie

### Externe links
- [Leaflet Documentation](https://leafletjs.com/)
- [react-leaflet Docs](https://react-leaflet.js.org/)
- [Overpass API](https://overpass-api.de/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)

---

⚠️ **Disclaimer**: Deze app biedt informatie ter referentie. Controleer altijd lokale regelgeving en vergunningsvereisten voordat je gaat vissen. De makers zijn niet aansprakelijk voor onjuiste informatie.

**Veel wijsgplezier! 🎣**
