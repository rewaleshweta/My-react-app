import React from 'react'
import camera from "./images/camera.png"
import logo from "./images/logoicone.png"
import "./navbar.css"
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='navheading'>
            <img height="50px" src={logo} alt="" />
            <h1>Instaclone</h1>
        </div>
        <div className='postimg'>
          <NavLink to="/addpost"> <img height="40px" src={camera}  alt="" /></NavLink>
       
        </div>
      
        </div>
      

  )
}

export default Navbar
