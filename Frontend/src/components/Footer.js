
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-cyberoaks">
      <div className="footer-top container">
        <div className="footer-col">
          <h4>Cyberoaks</h4>
          <p>Empowering your tech journey with skills that matter.</p>
        </div>
        <div className="footer-col">
          <h4 className="footer-col-heading">COMPANY</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/Demo">Contact Us</a></li>
            <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/Refund-policy">Refund Policy</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-col-heading">COURSES</h4>
          <ul>
            <li><a href="/web-development">Web Development</a></li>
            <li><a href="/ui-ux-design">UIUX Design</a></li>
            <li><a href="/data-science">Data Science</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-col-heading">CONTACT US</h4>
          <p>Email: <a href="mailto: cyberoaks53@gmail.com"> cyberoaks53@gmail.com</a></p>
          <p>Phone: <a href="tel:+91 7893907799">+91 7893907799</a></p>
          <p>
            Flat No. 204, 2nd Floor, Vasanthas Cyberview, Opp GHMC Park
            Gate, near Jain Sadguru Image Capital Park, Madhapur - 500081.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Cyberoaks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
