import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="about">About</Link>
        <Link to="cart">Cart</Link>
        <Link to="login">Login</Link>
      </div>
    </div>
  )
}

export default NavBar