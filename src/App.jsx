import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Chatbot from './components/Chatbot'
import Ecommerce from './components/Ecommerce'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/chat' element={<Chatbot />}></Route>
        <Route path='/ecommerce' element={<Ecommerce />}></Route>
      </Routes>
    </Router>
  )
}

export default App
