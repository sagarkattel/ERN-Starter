import React from 'react'
import {Outlet,Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to="">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="contact">Go to Contact</Link></li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Navbar