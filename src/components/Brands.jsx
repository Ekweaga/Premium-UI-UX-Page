import React from 'react'
import b1 from '../images/bolt-recharge-grey.png'
import b2 from '../images/cyber-techies-grey.png'
import b3 from '../images/eazy-mobile-grey.png'
import b4 from '../images/gnet-grey.png'
import '../styles/Brand.modules.scss'

function Brands() {
  return (
    <div className='brands'>
       <div className='row content m-auto brandContainer p-4 '>
        <div className='col-lg-3 sm-12 brand'><img src={b1}/></div>
        <div className='col-lg-3 sm-12 brand'><img src={b2}/></div>
        <div className='col-lg-3 sm-12 brand'><img src={b3}/></div>
        <div className='col-lg-3 sm-12 brand'><img src={b4}/></div>
       </div>
        </div>
  )
}

export default Brands