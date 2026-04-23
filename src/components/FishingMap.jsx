import React, { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { FISHING_ZONES, MAP_CENTER, INITIAL_ZOOM } from '../utils/fishingData'
import { fetchWaterFeaturesFromOverpass } from '../utils/api'
import { createMarkerIcon } from '../utils/mapUtils'
import { requestUserLocation } from '../utils/geolocationUtils'
import Legend from './Legend'
import FilterBar from './FilterBar'
import LoadingScreen from './LoadingScreen'
import './FishingMap.css'

function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function MapController({ onLocationFound }) {
  const map = useMap()
  const userMarkerRef = useRef(null)

  useEffect(() => {
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

function WaterPolylineLayer({ waterFeatures }) {
  const map = useMap()

  useEffect(() => {
    if (!waterFeatures || waterFeatures.length === 0) return

    const waterLayerGroup = L.featureGroup()

    waterFeatures.forEach(feature => {
      if (feature.type === 'way' && feature.coordinates) {
        try {
          const polyline = L.polyline(
            feature.coordinates.map(c => [c[1], c[0]]),
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
  const [userLocation, setUserLocation] = useState(null)
  const [showDisclaimer, setShowDisclaimer] = useState(true)
  const [cityFilter, setCityFilter] = useState('all')
  const [vispasFilter, setVispasFilter] = useState(false)
  const [nightFilter, setNightFilter] = useState(false)
  const mapRef = useRef(null)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      setError(null)

      try {
        const result = await fetchWaterFeaturesFromOverpass()

        if (result.success && result.features.length > 0) {
          const filteredFeatures = result.features.filter(f => {
            return f.name && f.name.trim() && f.name !== 'Onbekend water'
          })
          setWaterFeatures(filteredFeatures)
        } else {
          setWaterFeatures([])
        }
      } catch (err) {
        console.error('Fout bij laden water features:', err)
        setError('Fout bij het laden van watergegevens. De kaart toont alleen vaste locaties.')
        setWaterFeatures([])
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const handleLocationFound = (lat, lng) => {
    setUserLocation({ lat, lng })
  }

  const filteredZones = FISHING_ZONES.filter(zone => {
    if (cityFilter !== 'all' && zone.city !== cityFilter) return false
    if (vispasFilter && !zone.rules.requiresVispas) return false
    if (nightFilter && !zone.rules.nightFishing) return false
    return true
  })

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
        maxNativeZoom={18}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={19}
          minZoom={1}
          crossOrigin="anonymous"
          className="leaflet-tile-retina"
          detectRetina={true}
        />

        <WaterPolylineLayer waterFeatures={waterFeatures} />

        {filteredZones.map(zone => (
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

                {userLocation && (
                  <p className="popup-distance">
                    📏 {haversineDistance(userLocation.lat, userLocation.lng, zone.lat, zone.lng).toFixed(1)} km van jou
                  </p>
                )}

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

                {zone.federation && (
                  <div className="popup-section">
                    <p className="popup-federation">
                      <strong>Beheerder:</strong> {zone.federation}
                    </p>
                  </div>
                )}

                <div className="popup-footer">
                  <small>
                    Controleer visplanner.nl voor de meest actuele informatie
                  </small>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        <MapController onLocationFound={handleLocationFound} />
      </MapContainer>

      {/* Overlays boven de kaart */}
      <div className="map-overlays">
        {showDisclaimer && (
          <div className="disclaimer-banner">
            ⚠️ Controleer altijd visplanner.nl voor de meest actuele regels. Deze app is ter indicatie.
            <button
              className="disclaimer-close"
              onClick={() => setShowDisclaimer(false)}
              aria-label="Sluiten"
            >
              ✕
            </button>
          </div>
        )}

        <FilterBar
          cityFilter={cityFilter}
          onCityFilterChange={setCityFilter}
          vispasFilter={vispasFilter}
          onVispasFilterChange={setVispasFilter}
          nightFilter={nightFilter}
          onNightFilterChange={setNightFilter}
          visibleCount={filteredZones.length}
        />
      </div>

      <Legend />

      {error && (
        <div className="error-banner">
          ⚠️ {error}
        </div>
      )}
    </div>
  )
}

export default FishingMap
