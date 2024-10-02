import React from 'react'
import '../navbar/NavBar.css';
import CarWidget from '../carwidget/CarWidget'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='section-nav'>
      <Link to="/">
        <img className='nav-brand' src="\logo suministros industriales 2.1.png" alt="" />
      </Link>
      <ul className='nav-ul flex flex-row justify-between'>
         <Link className='mx-2 text-zinc-400 hover:text-white' to="spare">SPARE PARTS</Link>
         <Link className='mx-2 text-zinc-400 hover:text-white' to="sensor">SENSORS</Link>
         <Link className='mx-2 text-zinc-400 hover:text-white' to="device">DEVICES</Link>
      </ul>

      <CarWidget/>      
    </nav>
  )
}

export default NavBar
