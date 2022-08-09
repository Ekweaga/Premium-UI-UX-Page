import React from 'react'
import "../styles/Aboutus.modules.scss";
import t3 from '../images/f4.jpeg'
import t4 from '../images/f10.jpeg'

function AboutUs() {
  return (
    <div className="containers">
        <div className="bg1">
                <img src={t3}/>
        </div>
            <div className="restaurant">
                <img src={t4}/>
                <div className="aboutus">
                    <h2>About Us</h2>
                    <h3>We always serve our customers the best</h3>
                    <p>Pre -X ready made tasty and sweet delicacy food sweeten from our cook expert. Feel and Eat!!</p>
                </div>

            </div>



        </div>
  )
}

export default AboutUs