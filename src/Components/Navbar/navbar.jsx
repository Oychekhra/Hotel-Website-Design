import React from 'react'
import { Link } from 'react-router-dom'
import { NavRight, NavbarWrapper } from './nav'
import LogoWrapper from './logo'

const Navbar = () => {
  return (
    <NavbarWrapper>
     <div>
      <LogoWrapper />
     </div>
     <NavRight>
     <Link to="/" style={{textDecoration:"none"}}><p>Home</p></Link>
      <Link to='/facilities'style={{textDecoration:"none"}}><p>Facilities</p></Link>
      <Link to="/rooms"style={{textDecoration:"none"}}><p>Rooms</p></Link>
      <Link to="/contact-us"style={{textDecoration:"none"}}><p>Contact-us</p></Link>
     </NavRight>
    </NavbarWrapper>
  )
}

export default Navbar
