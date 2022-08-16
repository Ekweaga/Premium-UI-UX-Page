import React from 'react'
import "../styles/Contactus.modules.scss"

function ContactUs() {
  return (
    <div className="contactusContainer">
        <div className="contactusbox">
            <h1>Write to Us</h1>
            <p>Pre -X ready made tasty and sweet delicacy food sweeten from our cook expert. Feel and Eat!!</p>

            <div className="contact">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <button>Send</button>
            </div>
          
               
           
        </div>
      
    </div>
  )
}

export default ContactUs
