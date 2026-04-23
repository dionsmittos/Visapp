const OVERPASS_API = 'https://overpass-api.de/api/interpreter'

const BBOX = {
  south: 51.85,
  west: 4.25,
  north: 52.05,
  east: 4.60
}

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

const parseOsmToGeoJSON = (osmData) => {
  const features = []

  if (osmData.elements) {
    osmData.elements.forEach(element => {
      if (element.type === 'way' && element.geometry) {
        const name = element.tags?.name
        if (!name) return

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
        const name = element.tags?.name
        if (!name) return

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

export const fetchWaterFeaturesFromOverpass = async () => {
  try {
    const query = buildOverpassQuery()

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 30000)

    const response = await fetch(OVERPASS_API, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: query,
      signal: controller.signal
    })
    clearTimeout(timeout)

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    const geoJsonFeatures = parseOsmToGeoJSON(data)

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
