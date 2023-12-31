import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/courier-react/videos/video-2.mp4' autoPlay loop muted></video>
      <h1>Soluciones logísticas de carga courier</h1>
      <div className='hero-btns'>
          <Button className='btns' buttonSize='btn--large' buttonStyle='btn--outline'>
            Contáctanos
          </Button>
      </div>

    </div>
  )
}

export default HeroSection