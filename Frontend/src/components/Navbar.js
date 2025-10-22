import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {

    e.preventDefault();
    setDropdownOpen(prev => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    // close dropdown when closing menu
    if (menuOpen) {
      setDropdownOpen(false);
    }
  };

  return (
    <header>
      <div className="top-bar">
        <div className="social-icons">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/cyberoaks-private-limited-87009637a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>
        <div className="contact-info-navbar">
          Email: <a href="mailto:cyberoaks53@gmail.com">cyberoaks53@gmail.com</a>
          Phone: <a href="tel:+91 7893907799">+91  7893907799</a>
        </div>
      </div>

      <nav className="navbar-cyberoaks">
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={handleLinkClick}>Cyberoaks</Link>

          {/* Hamburger / Close Icon */}
          <button className="menu-toggle-btn" onClick={toggleMenu} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Menu */}
          <ul className={`menu ${menuOpen ? "open" : ""}`}>
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>

            <li className="dropdown">

              <Link to="/courses" onClick={handleLinkClick} className="dropdown-link">
                Courses
              </Link>
              <button className="dropdown-arrow-btn" onClick={toggleDropdown} aria-label={dropdownOpen ? "Close courses submenu" : "Open courses submenu"}>
                <span className={`arrow ${dropdownOpen ? "up" : "down"}`}>▾</span>
              </button>
              <ul className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                <li><Link to="/web-development" onClick={handleLinkClick}>Web Development</Link></li>
                <li><Link to="/ui-ux-design" onClick={handleLinkClick}>UI/UX Design</Link></li>
                <li><Link to="/data-science" onClick={handleLinkClick}>Data Science</Link></li>
              </ul>
            </li>

            <li><Link to="/Demo" onClick={handleLinkClick}>Contact</Link></li>
            <li><Link to="/Demo" className="btn-enroll" onClick={handleLinkClick}>Get Started</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
