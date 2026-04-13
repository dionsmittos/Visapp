import React, { useState } from 'react'
import './Legend.css'

function Legend() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`legend ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div 
        className="legend-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="legend-title">ℹ️ Legenda</div>
        <div className={`legend-toggle ${isExpanded ? 'open' : 'closed'}`}>
          {isExpanded ? '▼' : '▶'}
        </div>
      </div>

      {isExpanded && (
        <div className="legend-content">
          <div className="legend-item">
            <div className="legend-color green"></div>
            <span>Vissen toegestaan</span>
          </div>
          
          <div className="legend-item">
            <div className="legend-color red"></div>
            <span>Vissen verboden</span>
          </div>

          <div className="legend-item">
            <div className="legend-color blue"></div>
            <span>Jouw locatie</span>
          </div>

          <div className="legend-divider"></div>
          
          <div className="legend-info">
            <p><strong>Tips:</strong></p>
            <ul>
              <li>Klik op marker voor details</li>
              <li>Groen = VISpas of vrij vissen</li>
              <li>Rood = altijd verboden</li>
              <li>Blauw = jouw huidige positie</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Legend
