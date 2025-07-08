import React, { useEffect, useState } from 'react'
import './Crypto.css'
import search_icon from '../../assets/search.png'
import { fetchCoins } from './api'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from '../../components/other/LoadingSpinner'
import { useCurrency } from '../../context/CurrencyContext'
import { getCurrencySymbol } from '../../context/currencySymbols'
import { motion } from 'framer-motion'
import { coinlistvar, carditemvar } from '../../components/other/animations'

const Crypto = () => {

  const [coins, setCoins] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const {currency} = useCurrency()

  const navigate = useNavigate()

  useEffect(() => {
    const params = {
      vs_currency: currency,
      order: 'market_cap_desc',
      per_page: 250, 
      page: page,
      sparkline: false,
    }

    const getCoins = async () => {
      setLoading(true)
      try {
        const data = await fetchCoins(params)
        setCoins(data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    getCoins()

    const interval = setInterval(getCoins, 60000)

    return () => clearInterval(interval)
  }, [page, currency])

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="crypto-container">
  <div className="search-bar">
    <div className="input-container">
      <img src={search_icon} alt="search icon" className="search-icon" />
      <input
        type="text"
        placeholder="Enter a Crypto Currency"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />
    </div>

    <div className="pagination">
      <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={() => setPage((p) => p + 1)}>
        Next
      </button>
    </div>
  </div>

  <motion.div className="main-content"
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  transition={{duration: 0.5, ease: 'easeInOut'}}
  >
    <motion.div 
    className="coin-list"
    variants={coinlistvar}
    initial='hidden'
    animate='visible'
    >
      {coins
        .filter((coin) => coin.name.toLowerCase().includes(searchTerm))
        .map((coin) => (
          <motion.div 
          className="coin-card" 
          key={coin.id} 
          onClick={() => navigate(`/crypto/${coin.id}`)}
          variants={carditemvar}
          whileHover={{scale: 1.02}}
          whileTap={{scale:0.998}}
          
          >
            <div className="coin-main">
              <img src={coin.image} alt={coin.name} className="coin-img" />
              <div>
                <div className="coin-name">{coin.name}</div>
                <div className="coin-symbol">{coin.symbol.toUpperCase()}</div>
              </div>
            </div>
            <div className="coin-data">
              <div className="coin-price">{getCurrencySymbol(currency)}{coin.current_price.toLocaleString()}</div>
              <div
                className="coin-change"
                style={{
                  color:
                    coin.price_change_percentage_24h >= 0 ? 'lightgreen' : 'salmon',
                }}
              >
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </div>
              <div className="coin-mcap">Market Cap: ${coin.market_cap.toLocaleString()}</div>
            </div>
          </motion.div>
        ))}
    </motion.div>
  </motion.div>
</div>

  )
}

export default Crypto
