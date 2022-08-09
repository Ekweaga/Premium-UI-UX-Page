import React, {useState,useEffect} from 'react'
import  '../styles/Navbar.modules.scss'
import {FaBars, FaTimes} from 'react-icons/fa'
function Navbar() {
  const [open, setopen] = useState(false);
  return (
    <nav className='navs'>
      <div className='logoContainer'>
        <span className='logo'>Pre - X</span>
      </div>

      <div className='mobileBars' onClick={()=>setopen(true)}>
        <FaBars/>
      </div>
      <ul className={`${open ? 'menumobileactive' : undefined} } menu`} >

        <li className='mobileFatimes' onClick={()=>setopen(false)}><FaTimes style={{fontSize:'20px'}}/></li>
        <li>Home</li>
        <li>About Us</li>
        <li>Our Menu</li>
        <li>News</li>
      </ul>
    </nav>
  )
}

export default Navbar