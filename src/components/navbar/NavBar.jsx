import React, { useState, useEffect } from 'react'
import './NavBar.css'
import logo_icon from '../../assets/logo1.png'
import { NavLink } from 'react-router-dom'
import { useCurrency } from '../../context/CurrencyContext'
import { navbarAnimation } from '../other/animations'
import { motion } from 'framer-motion'
import HamburgerMenu from 'react-hamburger-menu'

const NavBar = () => {
  const { currency, setCurrency } = useCurrency()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleCurrencySelect = (selected) => {
    setCurrency(selected.toLowerCase())
    setMenuOpen(false)
  }

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className={`navbar-container${scrolled ? ' scrolled' : ''}`}
      variants={navbarAnimation}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="image">
        <img src={logo_icon} alt="logo of app" />
      </div>

      <div className="hamburger-menu">
        <HamburgerMenu
          isOpen={menuOpen}
          menuClicked={toggleMenu}
          width={28}
          height={22}
          strokeWidth={3}
          rotate={0}
          color="#5f9fff"
          borderRadius={2}
          animationDuration={0.3}
          aria-label="Toggle menu"
        />
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/crypto" onClick={() => setMenuOpen(false)}>
              Crypto
            </NavLink>
          </li>
          <li>
            <NavLink to="/resources" onClick={() => setMenuOpen(false)}>
              Resources
            </NavLink>
          </li>
          <li className="dropdown-mobile">
            <button className="dropbtn-mobile">{currency.toUpperCase()} ▼</button>
            <ul className="dropdown-content-mobile">
              <li onClick={() => handleCurrencySelect('USD')}>USD</li>
              <li onClick={() => handleCurrencySelect('GBP')}>GBP</li>
              <li onClick={() => handleCurrencySelect('EUR')}>EUR</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="navlinks">
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/crypto">
            <li>Crypto</li>
          </NavLink>
          <NavLink to="/resources">
            <li>Resources</li>
          </NavLink>
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
