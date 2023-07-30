import React from 'react'
import CountUp  from 'react-countup'
import './header.css'
import {HiLocationMarker} from 'react-icons/hi'
import himage from '../images/headerimage.jpg'
const Header = () => {
  return (
    <section className='hero-wrapper'>
        <div className="paddings innerWidth flexCenter hero-container">
    <div className="flexColStart hero-left">
       
        <div className="hero-title">
        <div className="orange-circle"/>
            <h1>
                Discover<br/>
                Most Suitable <br/> Positions
            </h1>
        </div>
        <div className="flexColStart hero-desc">
            <span>Find the Variety of startups</span>
            <span>Find your next tech job </span>
        </div>
        <div className="flexCenter search">
        <HiLocationMarker color='blue' size={25}/>
         <input type="text" /> 
         <button className='button'>Search</button>    
        </div>
        <div className="flexCenter stats">
            <div className="flexColCenter stat">
        <span>
        <CountUp start={8080} end={9000} duration={4}/>
        <span className='secondaryText'>+</span>
        </span>
        <span className='secondaryText'>Premium Products</span>
            </div>

            <div className="flexColCenter stat">
        <span>
        <CountUp start={1950} end={2000} duration={4}/>
        <span className='secondaryText'>+</span>
        </span>
        <span className='secondaryText'>Happy developers</span>
            </div>

            <div className="flexColCenter stat">
        <span>
        <CountUp end={28} />
        <span className='secondaryText'>+</span>
        </span>
        <span className='secondaryText'>unicorn companies</span>
            </div>
        </div>
    </div>
    <div className="flexCenter hero-right">
        <div className="image-container">
            <img src={himage} alt="" />
        </div>
    </div>


        </div>

    </section>
  )
}

export default Header