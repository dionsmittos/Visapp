// Geolocation utility with detailed error handling and instructions

export function showLocationError(message, title = 'Locatie fout') {
  const errorDiv = document.createElement('div')
  errorDiv.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    z-index: 9999;
    max-width: 85%;
    max-height: 80vh;
    overflow-y: auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  `
  
  const titleEl = document.createElement('h3')
  titleEl.textContent = title
  titleEl.style.cssText = 'margin: 0 0 16px 0; color: #1f2937; font-size: 18px; font-weight: 600;'
  
  const messageEl = document.createElement('div')
  messageEl.textContent = message
  messageEl.style.cssText = `
    margin: 0 0 24px 0;
    color: #4b5563;
    font-size: 13px;
    line-height: 1.6;
    white-space: pre-wrap;
    word-break: break-word;
  `
  
  const closeBtn = document.createElement('button')
  closeBtn.textContent = 'OK'
  closeBtn.style.cssText = `
    background: #3b82f6;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    width: 100%;
    touch-action: manipulation;
  `
  closeBtn.onmouseover = () => closeBtn.style.background = '#2563eb'
  closeBtn.onmouseout = () => closeBtn.style.background = '#3b82f6'
  closeBtn.onclick = () => {
    if (document.body.contains(errorDiv)) {
      document.body.removeChild(errorDiv)
    }
  }
  
  errorDiv.appendChild(titleEl)
  errorDiv.appendChild(messageEl)
  errorDiv.appendChild(closeBtn)
  
  document.body.appendChild(errorDiv)
}

export function requestUserLocation(buttonDiv, map, userMarkerRef, onLocationFound) {
  const L = require('leaflet')
  
  if (!navigator.geolocation) {
    showLocationError(
      'Geolocation (locatiebepaling) wordt niet ondersteund door je browser.\n\nProbeer een ander browser of apparaat.',
      'Browser niet ondersteund'
    )
    return
  }

  // Show loading state
  buttonDiv.style.opacity = '0.5'
  buttonDiv.style.pointerEvents = 'none'
  buttonDiv.innerHTML = '⏳'

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude, accuracy } = position.coords
      
      const zoomLevel = accuracy > 100 ? 13 : 15
      map.setView([latitude, longitude], zoomLevel)
      
      if (userMarkerRef.current) {
        map.removeLayer(userMarkerRef.current)
      }
      
      const blueIcon = L.divIcon({
        html: `
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" fill="none" stroke="#3b82f6" stroke-width="2" opacity="0.3"/>
            <circle cx="20" cy="20" r="12" fill="#3b82f6" stroke="white" stroke-width="2"/>
            <circle cx="20" cy="20" r="5" fill="white"/>
          </svg>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
      })
      
      userMarkerRef.current = L.marker([latitude, longitude], { icon: blueIcon })
        .addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>📍 Jouw locatie</strong><br/>
            <small>Nauwkeurigheid: ±${Math.round(accuracy)}m</small>
          </div>
        `)
        .openPopup()
      
      buttonDiv.style.opacity = '1'
      buttonDiv.style.pointerEvents = 'auto'
      buttonDiv.innerHTML = '📍'
      
      onLocationFound?.()
    },
    (error) => {
      buttonDiv.style.opacity = '1'
      buttonDiv.style.pointerEvents = 'auto'
      buttonDiv.innerHTML = '📍'

      console.error('Geolocation error:', error)
      
      let title = 'Locatie niet beschikbaar'
      let message = ''
      
      switch(error.code) {
        case 1:
          title = '📍 Toestemming vereist!'
          message = `Je hebt locatiebepaling voor deze app uitgeschakeld.\n\n` +
            `INSCHAKELEN:\n\n` +
            `📱 iPhone/iPad:\n` +
            `1. Instellingen → Privacy → Locatieservices → AAN\n` +
            `2. Scroll naar Safari → Kies "Altijd toestaan"\n` +
            `3. Vernieuw deze pagina\n` +
            `4. Klik weer op 📍\n\n` +
            `📱 Android Chrome:\n` +
            `1. Chrome menu (⋮) → Instellingen\n` +
            `2. Privacy → Sitetoestemmingen → Locatie\n` +
            `3. Klik op deze website → "Toestaan"\n` +
            `4. Vernieuw deze pagina\n` +
            `5. Klik weer op 📍\n\n` +
            `Als het nog niet werkt:\n` +
            `- Zorg dat je GPS/locatie is ingeschakeld\n` +
            `- Probeer in ander browser\n` +
            `- Zorg dat je buiten bent`
          break
        case 2:
          title = '📍 GPS signaal te zwak'
          message = `Je locatie kon niet bepaald worden.\n\n` +
            `Dit kan gebeuren omdat:\n` +
            `- Je in een gebouw zit\n` +
            `- GPS signaal te zwak is\n` +
            `- Je internet niet goed is\n\n` +
            `OPLOSSING:\n` +
            `1. Ga naar buiten in de open lucht\n` +
            `2. Wacht 10-30 seconden\n` +
            `3. Klik opnieuw op 📍`
          break
        case 3:
          title = '⏰ Timeout'
          message = `Het duurde te lang om je locatie te bepalen.\n\n` +
            `Dit gebeurt meestal omdat:\n` +
            `- Slechte GPS/internet verbinding\n` +
            `- Je in een gebouw zit\n\n` +
            `PROBEER:\n` +
            `1. Ga naar een open plek\n` +
            `2. Zorg voor goed WiFi/4G signaal\n` +
            `3. Klik opnieuw op 📍\n` +
            `4. Wacht langer (tot 30 seconden)`
          break
        default:
          title = '❌ Fout'
          message = 'Er was een technische fout:\n\n' + error.message + '\n\nProbeer het opnieuw.'
      }
      
      showLocationError(message, title)
    },
    {
      enableHighAccuracy: true,
      timeout: 30000,
      maximumAge: 0
    }
  )
}
