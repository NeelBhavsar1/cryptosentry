import React, { useState } from 'react'
import './CryptoBot.css'
import ai_image from '../../assets/ai.png'

const CryptoBot = () => {

  const [input, setInput] = useState('')
  const [message, setMessage] = useState([])
  const [loading, setLoading] = useState(false)


  return (
    <div className="chatwithai">
      <div className="header-info">
        <h1>Talk with AI</h1>
        <p>Welcome to the <span>CryptoBot</span> — your 24/7 AI crypto assistant. 
        Ask anything about cryptocurrencies, trends, or strategies and get smart, 
        real-time answers instantly.</p>
      </div>
      

      <div className="chat-container">
        <div className="top">
          <img src={ai_image} alt="ai icon" />
          <p>CryptoBot</p>
        </div>
        <div className="seperator"></div>

        <div className="mid">
          <div className="message-own">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laudantium, nobis quibusdam, dicta placeat animi fugit obcaecati, nulla eum magnam aliquid natus unde consectetur! Asperiores nulla voluptatibus inventore. Quae, quidem!</p>
          </div>

          <div className="message-ai">
            <img src={ai_image} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto itaque quae, et ipsum adipisci, ipsam nisi labore impedit ex dolor illo! Eveniet illo magni, ipsa reprehenderit libero officiis voluptates ipsum.</p>
          </div>

          <div className="message-own">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laudantium, nobis quibusdam, dicta placeat animi fugit obcaecati, nulla eum magnam aliquid natus unde consectetur! Asperiores nulla voluptatibus inventore. Quae, quidem!</p>
          </div>

          <div className="message-ai">
            <img src={ai_image} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto itaque quae, et ipsum adipisci, ipsam nisi labore impedit ex dolor illo! Eveniet illo magni, ipsa reprehenderit libero officiis voluptates ipsum.</p>
          </div>

          <div className="message-own">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laudantium, nobis quibusdam, dicta placeat animi fugit obcaecati, nulla eum magnam aliquid natus unde consectetur! Asperiores nulla voluptatibus inventore. Quae, quidem!</p>
          </div>

          <div className="message-ai">
            <img src={ai_image} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto itaque quae, et ipsum adipisci, ipsam nisi labore impedit ex dolor illo! Eveniet illo magni, ipsa reprehenderit libero officiis voluptates ipsum.</p>
          </div>
        </div>
        
        <div className="bottom">
          <input type="text" placeholder='Enter Something...' />
          <button>Enter</button>
        </div>

      </div>
    </div>
  )
}

export default CryptoBot