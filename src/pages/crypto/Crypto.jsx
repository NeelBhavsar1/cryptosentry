import React, { useEffect, useState } from 'react'
import './Crypto.css'
import search_icon from '../../assets/search.png'
import { fetchCoins } from './api'

const Crypto = () => {

  const [coins, setCoins] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const params = {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 250,
      page: 1,
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

    getCoins();
  }, [])

  return (
    <div className="crypto-container">
      <div className="search-bar">
        <div className="input-container">
          <img src={search_icon} alt="search icon" className="search-icon" />
          <input type="text" 
          placeholder="Enter a Crypto Currency" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          
          />
        </div>
      </div>


      <div className="main-content">
        <ul>
          {coins
            .filter((coin) => coin.name.toLowerCase().includes(searchTerm))
            .map((coin) => (
              <li key={coin.id}>
                <img src={coin.image} alt={coin.name} width={20} /> {coin.name} - ${coin.current_price}
              </li>
          ))}
          
        </ul>


      </div>
      
    </div>
  )
}

export default Crypto