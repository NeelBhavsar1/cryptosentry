import React from 'react'
import './Resources.css'
import { motion } from 'framer-motion'
import { aboutcontainervar, aboutitemvar } from '../../components/other/animations'

const Resources = () => {
  return (
    <div className="resources-container">
      <div className="page-title">
        <h1>Resources</h1>
      </div>
      <motion.div 
      className="resources-grid"
      initial='hidden'
      animate='visible'
      variants={aboutcontainervar}
      >

        <motion.div className="grid-item" variants={aboutitemvar}>
          <div className="grid-header">
            <h1>Learning Material</h1>
          </div>
          <div className="grid-info">
            <p>Explore curated tutorials, videos, and documentation to deepen your understanding of cryptocurrencies, blockchain technology, and trading fundamentals—perfect for beginners and experienced users alike.</p>
          </div>
          <div className="action-btn">
            <button
            onClick={() => window.open('https://www.investopedia.com/cryptocurrency-4427699', '_blank')}>Click to View</button>
          </div>
        </motion.div>

        <motion.div className="grid-item" variants={aboutitemvar}>
          <div className="grid-header">
            <h1>API References</h1>
          </div>
          <div className="grid-info">
            <p>Access detailed API documentation from trusted sources like CoinGecko, CoinMarketCap, and Binance. Ideal for developers building crypto apps, bots, or market dashboards.</p>
          </div>
          <div className="action-btn">
            <button
            onClick={() => window.open('https://docs.coingecko.com/reference/introduction', '_blank')}>Click to View</button>
          </div>
        </motion.div>

        <motion.div className="grid-item" variants={aboutitemvar}>
          <div className="grid-header">
            <h1>Tools & Utilities</h1>
          </div>
          <div className="grid-info">
            <p>Discover useful tools such as crypto converters, portfolio trackers, tax calculators, and charting platforms to enhance your crypto journey and decision-making.</p>
          </div>
          <div className="action-btn">
            <button
            onClick={() => window.open('https://www.cointracker.io/', '_blank')}>Click to View</button>
          </div>
        </motion.div>

        <motion.div className="grid-item" variants={aboutitemvar}>
          <div className="grid-header">
            <h1>News & Updates</h1>
          </div>
          <div className="grid-info">
            <p>Stay informed with the latest crypto headlines, market trends, regulatory updates, and major project announcements—all from reliable crypto news sources.</p>
          </div>
          <div className="action-btn">
            <button
            onClick={()=> window.open('https://www.coindesk.com/', '_blank')}>Click to View</button>
          </div>
        </motion.div>

        <motion.div className="grid-item" variants={aboutitemvar}>
          <div className="grid-header">
            <h1>Community & Forums</h1>
          </div>
          <div className="grid-info">
            <p>Connect with other crypto enthusiasts through forums like Reddit, Discord, and Twitter. Ask questions, share insights, and learn from real-world discussions in active communities.</p>
          </div>
          <div className="action-btn">
            <button
            onClick={()=>window.open('https://www.reddit.com/r/CryptoCurrency/', '_blank')}>Click to View</button>
          </div>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Resources