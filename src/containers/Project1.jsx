import React from 'react';
import './Project1.css';
import StopWatch from '../components/StopWatch';
import WaveWater from '../components/WaveWater';
function Project1() {
  return (
      <>
          <h1 className='self-start'>#1 STOPWATCH MINI PROJECT</h1>
          <div style={{ width: '100vw' }}>
              <StopWatch />
              <WaveWater/>
          </div>
      </>
  )
}

export default Project1