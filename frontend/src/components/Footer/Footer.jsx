import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets';

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Enjoy delicious meals delivered fast to your door. We partner with top local restaurants to bring you fresh food, great taste, and reliable service—every time you order.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="Facebook" />
                    <img src={assets.twitter_icon} alt="Twitter" />
                    <img src={assets.linkedin_icon} alt="LinkedIn" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>Contact</h2>
                <ul>
                    <li>Email: info@fooddel.com</li>
                    <li>Phone: +77 365 541 16</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="footer-copyright">
            <p>&copy; 2023 Food Delivery. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer