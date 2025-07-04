import React from 'react'
import './NavBar.css'
import logo_icon from '../../assets/logo1.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar-container">
        <div className="image">
            <img src={logo_icon} alt="logo of app" />
        </div>
        <div className="navlinks">
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/about'><li>About</li></NavLink>
                <NavLink to='/crypto'><li>Crypto</li></NavLink>
                <NavLink to='/cryptobot'><li>Talk to Ai</li></NavLink>
                <NavLink to='/resources'><li>Resources</li></NavLink>
            </ul>
        </div>
        <div className="actions-btns">
            <button>Currency</button>
            <button>Sign in</button>
        </div>
    </div>
  )
}

export default NavBar