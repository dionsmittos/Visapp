import React from 'react'
import { FISHING_ZONES } from '../utils/fishingData'
import './FilterBar.css'

function FilterBar({
  cityFilter,
  onCityFilterChange,
  vispasFilter,
  onVispasFilterChange,
  nightFilter,
  onNightFilterChange,
  visibleCount
}) {
  const cityCount = (city) => FISHING_ZONES.filter(z => z.city === city).length

  return (
    <div className="filter-bar">
      <div className="filter-row filter-cities">
        <button
          className={`filter-btn city-btn ${cityFilter === 'all' ? 'active' : ''}`}
          onClick={() => onCityFilterChange('all')}
        >
          Alles ({FISHING_ZONES.length})
        </button>
        {['Rotterdam', 'Schiedam', 'Delft'].map(city => (
          <button
            key={city}
            className={`filter-btn city-btn ${cityFilter === city ? 'active' : ''}`}
            onClick={() => onCityFilterChange(city)}
          >
            {city} ({cityCount(city)})
          </button>
        ))}
      </div>

      <div className="filter-row filter-toggles">
        <div className="vispas-segment">
          <button
            className={`segment-btn ${vispasFilter === 'all' ? 'active' : ''}`}
            onClick={() => onVispasFilterChange('all')}
          >
            Alle
          </button>
          <button
            className={`segment-btn ${vispasFilter === 'free' ? 'active' : ''}`}
            onClick={() => onVispasFilterChange('free')}
          >
            Vrij
          </button>
          <button
            className={`segment-btn ${vispasFilter === 'required' ? 'active' : ''}`}
            onClick={() => onVispasFilterChange('required')}
          >
            VISpas
          </button>
        </div>

        <button
          className={`filter-btn night-btn ${nightFilter ? 'active' : ''}`}
          onClick={() => onNightFilterChange(!nightFilter)}
        >
          🌙 Nachtvisserij
        </button>

        <span className="filter-count">{visibleCount} locaties</span>
      </div>
    </div>
  )
}

export default FilterBar
