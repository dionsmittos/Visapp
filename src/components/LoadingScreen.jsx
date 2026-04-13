import React from 'react'
import './LoadingScreen.css'

function LoadingScreen({ message = 'Kaart laden...' }) {
  return (
    <div className="loading-screen">
      <div className="loading-spinner"></div>
      <p className="loading-message">{message}</p>
    </div>
  )
}

export default LoadingScreen
