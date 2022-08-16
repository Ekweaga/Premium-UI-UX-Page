import React from 'react'
import Navbar from './components/Navbar'
import './styles/Home.modules.scss'
import img from './images/f6.jpeg'
import {BsArrowRight} from 'react-icons/bs'
import Brands from './components/Brands'
import Titles from './components/Titles'
import AboutUs from './components/AboutUs'
import Facts from './components/Facts'
import Dishes from './components/Dishes'
import Reserve from './components/Reserve'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'

function Home() {
  return (
   <> <div className='home'>
      <div className='nav'>
      <Navbar/>
      </div>

      <div className="bg1">
        <div className="photo1">
          <div className="photoContainer">
            <img src={img} />
          </div>
        </div>
      </div>
     
    <div className='slogan'>
     <h1>Spicy Taste and Authentic Aroma from Us</h1>
     <p>Pre -X ready made tasty and sweet delicacy food sweeten from our cook expert. Feel and Eat!!</p>
     <div >
      <button className='btn'><span>Order Now</span> &nbsp; <BsArrowRight/></button>
    </div>
    </div>
   


    </div>
    
    <div>
      <Brands/>
    </div>
    <div>
      <Titles/>
    </div>
    
    <div>
      <Facts/>
    </div>
    <div>
      <Dishes/>
    </div>
   
    <div>
      <Reserve/>
    </div>
    <div>
      <ContactUs/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default Home