import React from 'react'
import './Header.css'
import logo from '../../images/logo3.jpg'

function Header() {
  return (
    <div className="Header">
        <div className="Header-Logo">
            <img src={logo} alt="" />
        </div>
        <div className="Header-Navigation">
            <ul>
                <a href=""><li>Home</li></a>
                <a href="#services"><li>Our Quality</li></a>
                <a href="#services"><li>Our Services</li></a>
                <a href="#about-us"><li>About Us</li></a>
                <a href="#projects"><li>Our Projects</li></a>
                <a href=""><li>Contact Us</li></a>
            </ul>
        </div>
        <div className="mobileMenu">
        <i className="fa-solid fa-bars"></i>
        </div>

    </div>
  )
}

export default Header