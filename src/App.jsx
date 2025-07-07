import React from 'react'
import NavBar from './components/navbar/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/home/Home'
import About from '../src/pages/about/About'
import Crypto from '../src/pages/crypto/Crypto'
import CryptoBot from '../src/pages/cryptobot/CryptoBot'
import Resources from '../src/pages/resources/Resources'
import CryptoDetail from './pages/crypto/CryptoDetail'


const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/crypto' element={<Crypto />}/>
        <Route path='/cryptobot' element={<CryptoBot />}/>
        <Route path='/resources' element={<Resources />}/>
        <Route path='/crypto/:id' element={<CryptoDetail />} />
      </Routes>
    </div>
  )
}

export default App