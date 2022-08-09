import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import "../styles/Footer.modules.scss"

function Footer() {
  return (
 <footer className="footerContainer">
    <nav className='nav'>
        <div className="logoContainer">
            <span className='logo' style={{color:'orangered'}}>Pre - X</span>
            <span className="copyright">@ copyright Pre - X. All rights reserved</span>
        </div>
        <ul>
            <li>Privacy Policy</li>
             <li>Terms</li> 
             <li className='socialContainer'>
                <span>Get in touch</span>
                <ul>
                    <li><FaFacebook/></li>
                      <li><FaLinkedinIn/></li>
                      <li><FaInstagram/></li>
                </ul>
             </li>
        </ul>
    </nav>

 </footer>
  )
}

export default Footer