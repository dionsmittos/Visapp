import axios from 'axios'

// Overpass API endpoint
const OVERPASS_API = 'https://overpass-api.de/api/interpreter'

// Bounding box for Schiedam, Rotterdam, Delft region
// Format: [south, west, north, east]
const BBOX = {
  south: 51.88,
  west: 4.30,
  north: 52.02,
  east: 4.55
}

// Build Overpass QL query to fetch only NAMED water features
// Only gets named, significant waterways - no unknown small ditches
const buildOverpassQuery = () => {
  const { south, west, north, east } = BBOX
  return `[out:json][timeout:25];
(
  way["name"]["natural"="water"](${south},${west},${north},${east});
  way["name"]["waterway"~"river|canal|stream"](${south},${west},${north},${east});
  relation["name"]["natural"="water"](${south},${west},${north},${east});
  relation["name"]["waterway"~"river|canal"](${south},${west},${north},${east});
);
out geom;`
}

// Parse OSM ways/relations into GeoJSON-like format
// Only includes properly named features to avoid clutter
const parseOsmToGeoJSON = (osmData) => {
  const features = []

  // Process ways
  if (osmData.elements) {
    osmData.elements.forEach(element => {
      if (element.type === 'way' && element.geometry) {
        // Only include features with proper names (no unknowns)
        const name = element.tags?.name
        if (!name) return // Skip features without names
        
        const coords = element.geometry.map(point => [point.lon, point.lat])
        if (coords.length > 1) {
          features.push({
            id: `way-${element.id}`,
            type: 'way',
            name: name,
            coordinates: coords,
            tags: element.tags || {}
          })
        }
      }

      if (element.type === 'relation' && element.members) {
        // Only include named relations
        const name = element.tags?.name
        if (!name) return // Skip features without names
        
        features.push({
          id: `rel-${element.id}`,
          type: 'relation',
          name: name,
          tags: element.tags || {}
        })
      }
    })
  }

  return features
}

// Fetch water features from Overpass API
export const fetchWaterFeaturesFromOverpass = async () => {
  try {
    const query = buildOverpassQuery()
    const response = await axios.post(OVERPASS_API, query, {
      headers: {
        'Content-Type': 'text/plain'
      },
      timeout: 30000
    })

    const geoJsonFeatures = parseOsmToGeoJSON(response.data)
    return {
      success: true,
      features: geoJsonFeatures,
      count: geoJsonFeatures.length
    }
  } catch (error) {
    console.error('Overpass API error:', error.message)
    return {
      success: false,
      error: error.message,
      features: []
    }
  }
}

// Fetch from VISpas/Sportvisserij Nederland (fallback)
// Note: Actual implementation depends on available public APIs
export const fetchVispasAreas = async () => {
  try {
    // This is a placeholder - in real scenario, would fetch from their actual API/GeoJSON
    // For now, we return empty as we use hardcoded data
    return {
      success: true,
      areas: []
    }
  } catch (error) {
    console.error('Vispas API error:', error.message)
    return {
      success: false,
      areas: []
    }
  }
}
