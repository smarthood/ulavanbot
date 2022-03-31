import React from 'react'
import Botbtn from './Botbtn'
import Header from './Header'
import { Link } from 'react-router-dom'
import Main from './Main'

export default function Home() {
  return (
      <div>   
        <Header /> 
        <Main />
        <Link to="/chat">
         <Botbtn />
         </Link> 
      </div>
  )
}
