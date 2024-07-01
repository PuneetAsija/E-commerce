import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'
import Twitter_icon from '../Assets/twitter_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img class="logo" src={footer_logo} alt="" />
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
         <div className="footer-icons-container">
            <a href="https://www.instagram.com/officialpuneet.447/"><img className='social_icons' src={instagram_icon} alt="" /></a>
            <a href="https://www.facebook.com/asija.shab.9"> <img className='social_icons' src={facebook_icon} alt="" /></a>
            <a href="https://www.linkedin.com/in/puneet-asija-b7936828a/"> <img className='social_icons' src={Twitter_icon} alt="" /></a>
         </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p> Ecommerce Website ... Copyright @ 2024 -All Right Reserved. Made By Puneet Asija +91 83078-07580</p>
      </div>
    </div>
  )
}

export default Footer
