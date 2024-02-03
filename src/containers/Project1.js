import React from 'react';
import './Project1.css';
import StopWatch from '../components/StopWatch';
import WaveWater from '../components/WaveWater';
function Project1() {
  return (
      <>   
      <div className='project1'>
          <h1 className='self-start'>#1 STOPWATCH MINI PROJECT</h1>
          <div style={{ width: '100vw' }}>
              <StopWatch />
              <WaveWater/>
          </div>
      </div>
      </>
  )
}

export default Project1