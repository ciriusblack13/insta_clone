import React from 'react'
import './Homepage.css'
import Sidebar from '../../components/Navigation/Sidebar/Sidebar'
import Timeline from '../../components/Timeline/Timeline'

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='homepage__navbar'><Sidebar /></div>
        <div className='homepage__timeline'><Timeline /></div>
    </div>
  )
}

export default Homepage