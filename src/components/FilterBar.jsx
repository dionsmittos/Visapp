import React from 'react'
import './FilterBar.css'

const CITIES = ['Alles', 'Rotterdam', 'Schiedam', 'Delft']

function FilterBar({
  cityFilter,
  onCityFilterChange,
  vispasFilter,
  onVispasFilterChange,
  nightFilter,
  onNightFilterChange,
  visibleCount
}) {
  return (
    <div className="filter-bar">
      <div className="filter-row filter-cities">
        {CITIES.map(city => {
          const value = city === 'Alles' ? 'all' : city
          return (
            <button
              key={city}
              className={`filter-btn city-btn ${cityFilter === value ? 'active' : ''}`}
              onClick={() => onCityFilterChange(value)}
            >
              {city}
            </button>
          )
        })}
      </div>

      <div className="filter-row filter-toggles">
        <button
          className={`filter-btn toggle-btn ${vispasFilter ? 'active' : ''}`}
          onClick={() => onVispasFilterChange(!vispasFilter)}
        >
          VISpas vereist {vispasFilter ? 'aan' : 'uit'}
        </button>

        <button
          className={`filter-btn toggle-btn ${nightFilter ? 'active' : ''}`}
          onClick={() => onNightFilterChange(!nightFilter)}
        >
          Nachtvisserij {nightFilter ? 'aan' : 'uit'}
        </button>

        <span className="filter-count">{visibleCount} locaties</span>
      </div>
    </div>
  )
}

export default FilterBar
