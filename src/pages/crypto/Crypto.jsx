import React, { useEffect, useState } from 'react'
import './Crypto.css'
import search_icon from '../../assets/search.png'
import { fetchCoins } from './api'

const Crypto = () => {

  const [coins, setCoins] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    const params = {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 250, 
      page: page,
      sparkline: false,
    }

    const getCoins = async () => {
      try {
        const data = await fetchCoins(params)
        setCoins(data)
      } catch (err) {
        console.log(err)
      } 
    }

    getCoins()

    const interval = setInterval(getCoins, 60000)

    return () => clearInterval(interval)
  }, [page])

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

  <div className="main-content">
    <div className="coin-list">
      {coins
        .filter((coin) => coin.name.toLowerCase().includes(searchTerm))
        .map((coin) => (
          <div className="coin-card" key={coin.id}>
            <div className="coin-main">
              <img src={coin.image} alt={coin.name} className="coin-img" />
              <div>
                <div className="coin-name">{coin.name}</div>
                <div className="coin-symbol">{coin.symbol.toUpperCase()}</div>
              </div>
            </div>
            <div className="coin-data">
              <div className="coin-price">${coin.current_price.toLocaleString()}</div>
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
          </div>
        ))}
    </div>
  </div>
</div>

  )
}

export default Crypto
