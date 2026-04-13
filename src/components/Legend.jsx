import React, { useState, useEffect } from 'react'
import './Legend.css'

function Legend() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={`legend ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div 
        className="legend-header"
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsExpanded(!isExpanded)}
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
