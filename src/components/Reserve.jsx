import React from 'react'
import "../styles/Reserve.modules.scss"
import t2 from '../images/f6.jpeg'
import {BsArrowRight} from 'react-icons/bs'

function Reserve() {
  return (
    <div className='reserveContainer'>
        <div className='inner'>
            <div className="leftContainer">
                <div className="description">
                    <div className="ttitle">
                        <h1>Pre - X Reservation</h1>
                        <h2>Make yourselves comfortable</h2>
                    </div>
                    <p>Pre -X ready made tasty and sweet delicacy food sweeten from our cook expert. Feel and Eat!!</p>
                </div>
            </div>
            <div className="rightContainer">
                <div className='formContainer'>
                    <form action="">
                        <div className='imgContainer'>
                            <img src={t2} />
                        </div>
                        <div className='formInner'>
                            <input type="name" className="name"/>
                            <div className="dateTime">
                                <input type="date" className="date"/>
                                <input type="time" className="date"/>
                            </div>
                            <button><span>Book Now</span> &nbsp; <BsArrowRight/></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reserve