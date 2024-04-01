// Footer.js

import './LoggedFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


import React from 'react';

const LoggedFooter = () => {
  return (
    <footer className='after' >
      <div className="footer-container" >
        <div className="footer-section" style={{marginLeft:"55px"}}>
          <h4  style={{paddingLeft:'9px'}}>About Us</h4>
          <p>Our Food Portal is dedicated to bringing you the best culinary experiences from around the world. Explore, order, and indulge in deddcious meals with us.</p>
        </div>

        <div className="footer-section" style={{marginLeft:"100px"}}>
          <h4  style={{paddingLeft:'40px'}}>Quick Links</h4>
          <dl>
            <dd><a href="#">Home</a></dd>
            <dd><a href="#">Browse Restaurants</a></dd>
            <dd><a href="#">My Orders</a></dd>
            <dd><a href="#">Contact Us</a></dd>
          </dl>
        </div>

        <div className="footer-section">
          <h4  style={{paddingLeft:'35px'}}>Legal</h4>
          <dl>
            <dd><a href="#">Terms of Service</a></dd>
            <dd><a href="#">Privacy Poddcy</a></dd>
          </dl>
        </div>

        <div className="footer-section">
          <h4  style={{paddingLeft:'40px'}}>Connect With Us</h4>
          <dl>
          <dd><a href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></dd>
          <dd><a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></dd>
          <dd><a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></dd>
          </dl>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{paddingLeft:'1px'}}>&copy; 2023 Your Food Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default LoggedFooter;
