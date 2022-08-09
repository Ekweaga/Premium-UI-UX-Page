import React from 'react'
import t1 from '../images/f5.jpeg'
import t2 from '../images/f6.jpeg'
import t3 from '../images/f4.jpeg'
import t4 from '../images/f10.jpeg'
import '../styles/Titles.modules.scss'


function Titles() {
  return (
    <div className='title'>
        <div><h4>Specials</h4></div>
        <h1>Our Special Cuisine</h1>
        <div className="titleContainer">
            <div className='row  ml-3'>
                <div className='col-lg-3 sm-12 titleitem'><img src={t1}/>
                <h3>Western</h3>
                <p>Pre -X ready made tasty and sweet delicacy food sweeten from our cook expert. Feel and Eat!!</p>
                </div>
                <div className='col-lg-3 sm-12 titleitem'><img src={t2}/>
                <h3>Northern</h3>
                <p>Pre -X ready made tasty and sweet delicacy food sweeten from our cook expert. Feel and Eat!!</p>
                </div>
                <div className='col-lg-3 sm-12 titleitem'><img src={t3}/>
                <h3>Eastern</h3>
                <p>Pre -X ready made tasty and sweet delicacy food sweeten from our cook expert. Feel and Eat!!</p>
                </div>
                <div className='col-lg-3 sm-12 titleitem'><img src={t4}/>
                <h3>Southern</h3>
                <p>Pre -X ready made tasty and sweet delicacy food sweeten from our cook expert. Feel and Eat!!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Titles