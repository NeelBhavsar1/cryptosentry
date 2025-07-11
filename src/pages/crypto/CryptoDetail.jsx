import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts'
import './CryptoDetail.css'
import LoadingSpinner from '../../components/other/LoadingSpinner'
import { useCurrency } from '../../context/CurrencyContext'
import { getCurrencySymbol } from '../../context/currencySymbols'

const CryptoDetail = () => {
  const { id } = useParams()
  const [crypto, setCrypto] = useState(null)
  const [priceData, setPriceData] = useState([])
  const [loading, setLoading] = useState(true)
  const {currency} = useCurrency()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const coinRes = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        setCrypto(coinRes.data)

        const chartRes = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
          { params: { vs_currency: currency, days: 7 } }
        )

        const formattedData = chartRes.data.prices.map(([timestamp, price]) => ({
          time: new Date(timestamp).toLocaleDateString(),
          price: Number(price.toFixed(2)),
        }))

        setPriceData(formattedData)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id, currency])

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="crypto-detail-container">
      <div className="left-container">
        <div className="header-info">
          <p>{crypto.name}</p>
        </div>
        <div className="crypto-info">
          <p dangerouslySetInnerHTML={{ __html: crypto.description.en }} className='info-p'></p>
        </div>
        <div className="market-data">
          <h2>Market Data</h2>
          <p>Price: {getCurrencySymbol(currency)} {crypto.market_data.current_price[currency]?.toLocaleString()}</p>
          <p>Market Cap Rank: #{crypto.market_cap_rank}</p>
          <p>24h High: {getCurrencySymbol(currency)} {crypto.market_data.high_24h[currency]?.toLocaleString()}</p>
          <p>24h Low: {getCurrencySymbol(currency)} {crypto.market_data.low_24h[currency]?.toLocaleString()}</p>
          <p>Volume: {getCurrencySymbol(currency)} {crypto.market_data.total_volume[currency]?.toLocaleString()}</p>
          <p>Circulating Supply: {crypto.market_data.circulating_supply.toLocaleString()}</p>
        </div>
      </div>

      <div className="right-container">
        <h2>Price Chart (Last 7 Days)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={priceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default CryptoDetail
