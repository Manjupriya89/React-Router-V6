import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import './Nvbar.css'

const NavBar = () => {
  return (
    <div className='container'>
       <div className='navLabel'>
        <strong >BOOT CAMPS</strong>
        </div> 
        <div className='navbar'>
           
            <Link className='navItem' to='/about'>About</Link>
            <Link className='navItem' to='/course'>Courses</Link>
            <Link className='navItem' to='/career'>Career</Link>
           
        </div>
        <Outlet/>
    </div>
  )
}

export default NavBar