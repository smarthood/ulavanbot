import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css' 
export default function Header() {
    
  return (
    <div>
        <nav id='menu'>
  <input type='checkbox' id='responsive-menu' onclick='updatemenu()' /><label></label>
  <ul>
   <Link to="/ecommerce"><li>இ-வணிகம்</li></Link>
    <li>விவசாய கல்வி</li>
    <li>அரசு சலுகைகள்</li>
    <li>நில நலன்</li>
  </ul>
</nav>
    </div>
  )
}
