import L from 'leaflet'

// Create a custom marker icon
export const createMarkerIcon = (status) => {
  const color = status === 'allowed' ? '#22c55e' : '#ef4444'
  
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <svg width="32" height="40" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C8.3 0 2 6.3 2 14c0 8 14 26 14 26s14-18 14-26c0-7.7-6.3-14-14-14z" 
              fill="${color}" stroke="white" stroke-width="2"/>
        <circle cx="16" cy="14" r="4" fill="white"/>
      </svg>
    `,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -40],
    shadowUrl: null
  })
}
