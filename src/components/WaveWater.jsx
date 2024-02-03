import React from 'react'
import Wave from 'react-wavify';
function WaveWater() {
  return (
    <Wave fill='url(#gradient)'
          paused={false}
          style={{ display: 'flex',position:'fixed',bottom:'0' }}
          options={{
            height: 40,
            amplitude: 20,
            speed: 0.25,
            points: 5
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#F5CA56" />
              <stop offset='50%'
              stopColor='#E08E37' />
              <stop offset="90%" stopColor="#f79902" />
            </linearGradient>
          </defs>
        </Wave>
  )
}

export default WaveWater