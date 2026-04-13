import React, { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { FISHING_ZONES, MAP_CENTER, INITIAL_ZOOM, STATUS_COLORS } from '../utils/fishingData'
import { fetchWaterFeaturesFromOverpass } from '../utils/api'
import { createMarkerIcon } from '../utils/mapUtils'
import { requestUserLocation } from '../utils/geolocationUtils'
import Legend from './Legend'
import LoadingScreen from './LoadingScreen'
import './FishingMap.css'

// Component to handle map-level interactions
function MapController({ onLocationFound }) {
  const map = useMap()
  const userMarkerRef = useRef(null)

  useEffect(() => {
    // Add locate button control
    const locateButton = L.control({ position: 'topright' })
    
    locateButton.onAdd = () => {
      const div = L.DomUtil.create('div', 'locate-button')
      div.innerHTML = '📍'
      div.title = 'Klik voor jouw locatie (vraagt toestemming)'
      div.setAttribute('aria-label', 'Toon mijn locatie op kaart')
      
      L.DomEvent.on(div, 'click', (e) => {
        L.DomEvent.stopPropagation(e)
        requestUserLocation(div, map, userMarkerRef, onLocationFound)
      })
      
      return div
    }
    
    locateButton.addTo(map)
    
    return () => {
      locateButton.remove()
    }
  }, [map, onLocationFound])

  return null
}

// Polyline component for water features from API
function WaterPolylineLayer({ waterFeatures }) {
  const map = useMap()

  useEffect(() => {
    if (!waterFeatures || waterFeatures.length === 0) return

    // Create a feature group for water lines
    const waterLayerGroup = L.featureGroup()

    waterFeatures.forEach(feature => {
      if (feature.type === 'way' && feature.coordinates) {
        try {
          const polyline = L.polyline(
            feature.coordinates.map(c => [c[1], c[0]]), // Swap lon/lat to lat/lon
            {
              color: '#3b82f6',
              weight: 3,
              opacity: 0.6,
              className: 'water-line'
            }
          )
          
          polyline.bindPopup(`
            <div class="water-popup">
              <strong>${feature.name}</strong>
              <p class="water-type">${feature.tags.waterway || 'Water'}</p>
            </div>
          `)
          
          polyline.addTo(waterLayerGroup)
        } catch (error) {
          console.warn('Failed to create polyline:', error)
        }
      }
    })

    waterLayerGroup.addTo(map)

    return () => {
      map.removeLayer(waterLayerGroup)
    }
  }, [waterFeatures, map])

  return null
}

function FishingMap() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [waterFeatures, setWaterFeatures] = useState([])
  const mapRef = useRef(null)

  useEffect(() => {
    // Fetch water features from Overpass API with fallback to hardcoded data
    const loadData = async () => {
      setLoading(true)
      setError(null)

      try {
        const result = await fetchWaterFeaturesFromOverpass()
        
        if (result.success && result.features.length > 0) {
          // Only show water features if we got good data
          const filteredFeatures = result.features.filter(f => {
            // Extra validation - only show features with proper names
            return f.name && f.name.trim() && f.name !== 'Onbekend water'
          })
          
          setWaterFeatures(filteredFeatures)
          console.log(`Geladen ${filteredFeatures.length} benoemde waterfeatures`)
        } else {
          console.warn('Geen geldige water features van API')
          setWaterFeatures([])
        }
      } catch (err) {
        console.error('Fout bij laden water features:', err)
        setWaterFeatures([])
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const handleLocationFound = () => {
    // Optional: Can add additional logic here when location is found
  }

  if (loading) {
    return <LoadingScreen message="Kaart en viswateren laden..." />
  }

  return (
    <div className="fishing-map-container">
      <MapContainer
        center={[MAP_CENTER.lat, MAP_CENTER.lng]}
        zoom={INITIAL_ZOOM}
        className="map"
        ref={mapRef}
        attributionControl={true}
        preferCanvas={true}
        zoomControl={false}
        touchZoom={true}
        dragging={true}
        inertia={true}
      >
        {/* Base layer - High quality tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={19}
          minZoom={1}
          crossOrigin="anonymous"
        />

        {/* Water features from API */}
        <WaterPolylineLayer waterFeatures={waterFeatures} />

        {/* Fishing zones markers */}
        {FISHING_ZONES.map(zone => (
          <Marker
            key={zone.id}
            position={[zone.lat, zone.lng]}
            icon={createMarkerIcon(zone.status)}
            title={zone.name}
          >
            <Popup className="fishing-popup">
              <div className="popup-content">
                <h3 className="popup-title">{zone.name}</h3>
                <p className="popup-city">📍 {zone.city}</p>
                
                <div className={`status-badge ${zone.status}`}>
                  {zone.status === 'allowed' ? '✓ Mag vissen' : '✗ Verboden'}
                </div>

                <div className="popup-section">
                  <p className="popup-description">{zone.description}</p>
                </div>

                <div className="popup-section">
                  <h4>Regels</h4>
                  <ul className="rules-list">
                    <li>
                      <strong>VISpas vereist:</strong>{' '}
                      {zone.rules.requiresVispas ? 'Ja' : 'Nee'}
                    </li>
                    <li>
                      <strong>Nachtvisserij:</strong>{' '}
                      {zone.rules.nightFishing ? 'Toegestaan' : 'Niet toegestaan'}
                    </li>
                    <li>
                      <strong>Seizoensverbod:</strong> {zone.rules.seasonalBan}
                    </li>
                    <li>
                      <strong>Minimale maat:</strong> {zone.rules.minSize}
                    </li>
                  </ul>
                </div>

                {zone.rules.otherRules && (
                  <div className="popup-section">
                    <p className="other-rules">
                      <strong>Overige regels:</strong> {zone.rules.otherRules}
                    </p>
                  </div>
                )}

                <div className="popup-footer">
                  <small>
                    Controleer lokale regelgeving voor de meest actuele informatie
                  </small>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Map controller for locate button */}
        <MapController onLocationFound={handleLocationFound} />
      </MapContainer>

      {/* Legend */}
      <Legend />

      {/* Error message */}
      {error && (
        <div className="error-banner">
          ⚠️ {error}
        </div>
      )}
    </div>
  )
}

export default FishingMap
