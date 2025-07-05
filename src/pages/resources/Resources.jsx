import React from 'react'
import './Resources.css'

const Resources = () => {
  return (
    <div className="resources-container">
      <div className="page-title">
        <h1>Resources</h1>
      </div>
      <div className="resources-grid">

        <div className="grid-item">
          <div className="grid-header">
            <h1>Learning Material</h1>
          </div>
          <div className="grid-info">
            <p>Explore curated tutorials, videos, and documentation to deepen your understanding of cryptocurrencies, blockchain technology, and trading fundamentals—perfect for beginners and experienced users alike.</p>
          </div>
          <div className="action-btn">
            <button>Click to View</button>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-header">
            <h1>API References</h1>
          </div>
          <div className="grid-info">
            <p>Access detailed API documentation from trusted sources like CoinGecko, CoinMarketCap, and Binance. Ideal for developers building crypto apps, bots, or market dashboards.</p>
          </div>
          <div className="action-btn">
            <button>Click to View</button>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-header">
            <h1>Tools & Utilities</h1>
          </div>
          <div className="grid-info">
            <p>Discover useful tools such as crypto converters, portfolio trackers, tax calculators, and charting platforms to enhance your crypto journey and decision-making.</p>
          </div>
          <div className="action-btn">
            <button>Click to View</button>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-header">
            <h1>News & Updates</h1>
          </div>
          <div className="grid-info">
            <p>Stay informed with the latest crypto headlines, market trends, regulatory updates, and major project announcements—all from reliable crypto news sources.</p>
          </div>
          <div className="action-btn">
            <button>Click to View</button>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-header">
            <h1>Community & Forums</h1>
          </div>
          <div className="grid-info">
            <p>Connect with other crypto enthusiasts through forums like Reddit, Discord, and Twitter. Ask questions, share insights, and learn from real-world discussions in active communities.</p>
          </div>
          <div className="action-btn">
            <button>Click to View</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Resources