import React, { useState } from 'react'
import './NavBar.css'
import logo_icon from '../../assets/logo1.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('Currency')

    const handleCurrencySelect = (currency) => {
        setSelectedCurrency(currency)
        //sort the currency later
    }

    return (
        <div className="navbar-container">
            <div className="image">
                <img src={logo_icon} alt="logo of app" />
                {/* SORT THE LOGO OUT LATER */}
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
                <div className="dropdown">
                    <button className="dropbtn">{selectedCurrency} ▼</button>
                    <div className="dropdown-content">
                        <ul>
                            <li onClick={() => handleCurrencySelect('USD')}>USD</li>
                            <li onClick={() => handleCurrencySelect('GBP')}>GBP</li>
                            <li onClick={() => handleCurrencySelect('EUR')}>EUR</li>
                        </ul>
                    </div>
                </div>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default NavBar
