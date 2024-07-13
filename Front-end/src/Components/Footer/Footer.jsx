import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo} alt="" srcset="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, ipsa,
            quia architecto laudantium obcaecati laborum dicta et repudiandae
            adipisci excepturi eligendi illo quaerat nobis voluptatem sint quia
            ipsum eum dicta unde voluptate cum obcaecati!
          </p>
          <div className="footer-social-media">
            <ul>
              <li>
                <a href="">
                  <img src={assets.facebook_icon} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={assets.twitter_icon} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={assets.linkedin_icon} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-middle">
         
            <strong>COMPANY</strong>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Delivery</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          
        </div>
        <div className="footer-right">
          <strong>GET IN TOUCH</strong>
          <ul>
            <li>+91 123456789</li>
            <li>contact@hungerbites.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="footer-copyright">
        <p>Copyright 2024 @ HungerBites.com-All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
