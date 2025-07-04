import React from 'react'
import './Home.css'
import app_icon from '../../assets/homeapp.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className="home-container">
      <div className="left-container">
        <h1>Welcome to <br /> Crypto Sentry</h1>
        <p>
          Stay ahead in the crypto world by checking cryptocurrency prices in real-time, exploring detailed coin information, and tracking market trends effortlessly.  
          Get instant insights and analysis by chatting with our AI assistant to understand the latest market movements and make informed decisions.  
          Whether you’re a beginner or an expert, Crypto Sentry is your go-to platform for all things crypto.
        </p>
        <div className="buttons">
          <button onClick={() => navigate('/crypto')}>View Crypto</button>
          <button onClick={() => navigate('/resources')}>Resources</button>
        </div>
      </div>
      <div className="right-container">
        <img src={app_icon} alt="" />

      </div>
      
    </div>
  )
}

export default Home