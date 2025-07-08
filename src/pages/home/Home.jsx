import React from 'react'
import './Home.css'
import app_icon from '../../assets/homeapp.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { buttonAnims} from '../../components/other/animations'
import {letterAnimation} from '../../components/other/animations'


const paragraphText = ` Stay ahead in the crypto world by checking cryptocurrency prices in real-time, exploring detailed coin information, and tracking market trends effortlessly. Get instant insights and analysis by chatting with our AI assistant to understand the latest market movements and make informed decisions. Whether you’re a beginner or an expert, Crypto Sentry is your go-to platform for all things crypto.`;



const Home = () => {

  const navigate = useNavigate()

  return (
    <motion.div 
    className="home-container"
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1, ease: 'circInOut'}}
    >
      <div className="left-container">
        <h1>Welcome to <br /> Crypto Sentry</h1>
        <motion.p
        className='typewriter'
        initial='hidden'
        animate='visible'
        >
          {[...paragraphText].map((char, i) => (
            <motion.span
            key = {i}
            variants={letterAnimation}
            custom={i}
            style={{ display: char === ' ' ? 'inline-block' : 'inline'}}
            >
              {char}
            </motion.span>
          ))}
          
        </motion.p>
        <div className="buttons">
          <motion.button 
          onClick={() => navigate('/crypto')}
          variants={buttonAnims}
          initial='hidden'
          animate='visible'
          whileTap='tap'
          whileHover='hover'
          >View Crypto</motion.button>

          <motion.button 
          onClick={() => navigate('/resources')}
          variants={buttonAnims}
          initial='hidden'
          animate='visible'
          whileTap='tap'
          whileHover='hover'
          >Resources
          </motion.button>

        </div>
      </div>
      <div className="right-container">
        <img src={app_icon} alt="" />

      </div>
      
    </motion.div>
  )
}

export default Home