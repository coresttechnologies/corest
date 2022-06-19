import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className="Footer">
      <div className="FooterSection">
        <div className="FooterAbout">
          <h1 className="FooterSiteTitle">Corest</h1>
          <div className="address">
            <i className="fa-solid fa-location-dot"></i>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit explicabo </p>
          </div>
          <div className="mail">
            <i className="fa-solid fa-envelope"></i>
            <p>info@corest.com</p>
          </div>
        </div>
        <div className="FooterMenu">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Portfolio</li>
            </ul>
        </div>
        <div className="socialMedia">
          <div className="icons">
            <a href=""><i className="fa-brands fa-facebook"></i></a>
            <a href=""><i className="fa-brands fa-instagram"></i></a>
            <a href=""><i className="fa-brands fa-twitter"></i></a>
            <a href=""><i className="fa-brands fa-whatsapp"></i></a>
          </div>
          <div className="enquiry">
            <h1>Lets Talk?</h1>
            <button>Make an enquiry</button>
          </div>
        </div>
      </div>
      <div className="Copyright">
        <p>2022 &copy;<a>Corest</a> All rights reserved.</p>
        <p className="copyrightPhone"><i className="fas fa-phone"></i> 789456123</p>
      </div>
    </div>
  )
}

export default Footer