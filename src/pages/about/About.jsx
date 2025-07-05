import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="container-item">
        <div className="header-info">
          <h1>What is CryptoSentry?</h1>
        </div>
        <div className="container-info">
          <p>Crypto Sentry is your all-in-one crypto companion
             — offering real-time data, intelligent insights, 
             and tools to help you track, understand, and explore 
             the cryptocurrency market safely and confidently.</p>
        </div>  
      </div>
      <div className="container-item">
        <div className="header-info">
          <h1>Real-Time Market Data</h1>
        </div>
        <div className="container-info">
          <p>Powered by the CoinGecko API, Crypto Sentry delivers 
            up-to-date market prices, rankings, and coin statistics 
            — so you can make informed decisions in an ever-changing 
            crypto landscape.</p>
        </div>  
      </div>
      <div className="container-item">
        <div className="header-info">
          <h1>AI Chatbot Assistance</h1>
        </div>
        <div className="container-info">
          <p>Ask questions like “What is Ethereum?” or “Should I invest 
            in Bitcoin?” and get intelligent, natural responses from our 
            built-in AI assistant — available 24/7 to guide you.</p>
        </div>  
      </div>
      <div className="container-item">
        <div className="header-info">
          <h1>Educational Resources</h1>
        </div>
        <div className="container-info">
          <p>Whether you're new to crypto or a seasoned investor, CryptoSentry 
            provides easy-to-understand definitions, breakdowns, and insights 
            into coins, terms, and trends.</p>
        </div>  
      </div>
      <div className="container-item">
        <div className="header-info">
          <h1>Simple, Clean UI</h1>
        </div>
        <div className="container-info">
          <p>Designed with a minimal and responsive layout, our interface lets 
            you focus on what matters — without distractions or unnecessary clutter.</p>
        </div>  
      </div>
      <div className="container-item">
        <div className="header-info">
          <h1>Safe & Free</h1>
        </div>
        <div className="container-info">
          <p>Crypto Sentry is completely free to use and doesn’t require any login 
            or wallet connections. Just visit, learn, explore, and stay updated.</p>
        </div>  
      </div> 
    </div>
  )
}

export default About