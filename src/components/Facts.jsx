import React from 'react'
import "../styles/Fact.modules.scss"

function Facts() {
  return (
    <div className='containerss'>
    <div className='inner'>
        <div className='facts row container'>
            <div className='fact col-lg-3'>
                <h2>10</h2>
                <h3>Restaurant</h3>
            </div>
            <div className='fact col-lg-3'>
                <h2>9</h2>
                <h3>Experience</h3>
            </div>
            <div className='fact col-lg-3'>
                <h2>30</h2>
                <h3>Menu Dishes</h3>
            </div>
            <div className='fact col-lg-3'>
                <h2>1000</h2>
                <h3>Customers</h3>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Facts