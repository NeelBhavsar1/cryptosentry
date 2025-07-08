import React, { useState } from 'react'
import './NavBar.css'
import logo_icon from '../../assets/logo1.png'
import { NavLink } from 'react-router-dom'
import { useCurrency } from '../../context/CurrencyContext'
import { navbarAnimation } from '../other/animations'
import { motion } from 'framer-motion'


const NavBar = () => {
    const {currency, setCurrency} = useCurrency()

    const handleCurrencySelect = (selected) => {
        setCurrency(selected.toLowerCase())
    }

    return (
        <motion.div 
        className="navbar-container"
        variants={navbarAnimation}
        initial='hidden'
        animate='visible'
        transition={{duration: 1, ease: 'easeInOut'}}
        
        >
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
                    <button className="dropbtn">{currency.toUpperCase()} ▼</button>
                    <div className="dropdown-content">
                        <ul>
                            <li onClick={() => handleCurrencySelect('USD')}>USD</li>
                            <li onClick={() => handleCurrencySelect('GBP')}>GBP</li>
                            <li onClick={() => handleCurrencySelect('EUR')}>EUR</li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default NavBar
