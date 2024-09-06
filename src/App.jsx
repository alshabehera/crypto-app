import React from 'react'
import {Routes,Route} from 'react-router-dom';
import {Layout, Typography} from 'antd';
import './App.css'

import Cryptocurrencies from './components/Cryptocurrencies';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import News from './components/News';
import CryptoDetails from './components/CryptoDetails';


const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="main">
            <Layout>
                <div className="routes">
               <Routes>
              
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/news" element={<News />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/" element={<Homepage />} />
               </Routes>
                </div>
            </Layout>
            <div className="footer">
          <Typography.Title level={5} style={{ color:'white', textAlign: 'center'}}>
            Cryptoverse
          </Typography.Title>
          
         

        </div>
        </div>
     
    </div>
  )
}

export default App