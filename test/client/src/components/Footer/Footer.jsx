import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer___top">
          <div className="footer___top--section footer__setion-1">
            <p className="footer__setion-1--p1">Subscribe Newsletter</p>
            <p className="footer__setion-1--p2">
              We understand the complexities of modern markets and translate
              them into real business solutions for automotive, financial,
              insuranc.
            </p>
            <div className="footer-input">
              <input type="email" placeholder="Enter your email" />
              <button>
                <ArrowForwardIcon />
              </button>
            </div>
          </div>
          <div className="footer___top--section footer__setion-2">
            <ul className="footer__setion-2-list">
              <li className="footer__setion-2-list-item hero">Quick Links</li>
              <li className="footer__setion-2-list-item">My Account</li>
              <li className="footer__setion-2-list-item">Online Catalog</li>
              <li className="footer__setion-2-list-item">Contact</li>
              <li className="footer__setion-2-list-item">Terms & Conditions</li>
            </ul>
          </div>
          <div className="footer___top--section footer__setion-3">
            <ul className="footer__setion-3-list">
              <li className="footer__setion-3-list-item hero">Services</li>
              <li className="footer__setion-3-list-item">Medium Enterprise</li>
              <li className="footer__setion-3-list-item">Large Enterprise</li>
              <li className="footer__setion-3-list-item">Education</li>
              <li className="footer__setion-3-list-item">Government</li>
              <li className="footer__setion-3-list-item">Health Care</li>
            </ul>
          </div>
          <div className="footer___top--section footer__setion-4">
            <ul className="footer__setion-4-list">
              <li className="footer__setion-4-list-item hero">Contact Us</li>
              <li className="footer__setion-4-list-item">Support Ticket</li>
              <li className="footer__setion-4-list-item">FAQ</li>
              <li className="footer__setion-4-list-item">Contact Us</li>
            </ul>
          </div>
          <div className="footer___top--section footer__setion-5">
            <p className="footer__setion-5-hero">Subscribe newsletter</p>
            <ul className="footer__setion-5-list">
              <li className="footer__setion-5-list-item item-1">
                <FacebookIcon style={{ fontSize: "1.2rem", color: "white" }} />
              </li>
              <li className="footer__setion-5-list-item item-2">
                <YouTubeIcon style={{ fontSize: "1.2rem", color: "white" }} />
              </li>
              <li className="footer__setion-5-list-item item-3">
                <LinkedInIcon style={{ fontSize: "1.2rem", color: "white" }} />
              </li>
              <li className="footer__setion-5-list-item item-4">
                <InstagramIcon style={{ fontSize: "1.2rem", color: "white" }} />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer___bottom">
          <p>
            Copyright ©2023 All rights reserved | This template is made with{" "}
            <FavoriteIcon style={{ fontSize: "1.2rem", color: "#00c1cf" }} /> by
            Colorlib
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
