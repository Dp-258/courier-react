import React from 'react'
import '../App.css';
import './HeroImage.css';
function HeroImage({ src, title }) {
    const heroImageStyle = {
      background: `url(${src}) center/cover no-repeat`,
    };
    return (
        <div className='hero-container-image' style={heroImageStyle}>
          <h1>{title}</h1>
        </div>
      );
    }
export default HeroImage