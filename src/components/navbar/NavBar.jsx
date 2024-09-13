import React from 'react'
import '../navbar/NavBar.css';
import CarWidget from '../carwidget/CarWidget'

const NavBar = () => {
  return (
    <nav className='section-nav'>
      <img className='nav-brand' src="\logo suministros industriales 2.1.png" alt="" />
      <ul className='nav-ul'>
        <li className='nav-li'>spare parts</li>
        <li className='nav-li'>sensors</li>
        <li className='nav-li'>devices</li>
        <li className='nav-li'>others</li>
      </ul>

      <CarWidget/>      
    </nav>
  )
}

export default NavBar
