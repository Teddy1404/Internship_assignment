import React from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
const Navbar = () => {
  return (
    <section className='h-wrapper'>
      <div className='h-container paddings innerWidth flexCenter'>
        <img src={logo} alt="" width={50} height={50}/>

        <div className="h-menu flexCenter">
          <a href="/">Residencies</a>
          <a href="/">Our Value</a>
          <a href="/">Contact Us</a>
          <a href="/">Get Started</a>
          <button className='button'>
            <a href="/">Contact </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Navbar