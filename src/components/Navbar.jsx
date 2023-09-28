import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file
import logo from '../assets/logo2.jpeg';

function Navbar() {
  // State to track whether the mobile menu is open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State to track whether the "2024 Information" dropdown is open
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to close mobile menu when a link is pressed
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Function to toggle "2024 Information" dropdown
  const toggleInfoDropdown = () => {
    setInfoDropdownOpen(!infoDropdownOpen);
  };

  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
        <img src={logo} alt="Little IQ Logo" className="logo" />
        </Link>
        <div className="logo-text">
          <span className="letter-l">L</span>
          <span className="letter-i">I</span>
          <span className="letter-t1">T</span>
          <span className="letter-t2">T</span>
          <span className="letter-l2">L</span>
          <span className="letter-e">E</span>
          <span className="desh">-</span>
          <span className="letter-i2">I</span>
          <span className="letter-q">Q</span>
        </div>
      </div>
   
      {/* Hamburger icon for mobile */}
      <div className={`hamburger${mobileMenuOpen ? ' open' : ''}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* Navigation links */}
      <ul className={mobileMenuOpen ? 'open' : ''}>
        <li onClick={closeMobileMenu}><Link to="/">Home</Link></li>
        <li onClick={closeMobileMenu}><Link to="/about">About</Link></li>
        <li onClick={closeMobileMenu}><Link to="/education">Education</Link></li>
        <li onClick={closeMobileMenu}><Link to="/gallery">Gallery</Link></li>
        <li onClick={closeMobileMenu}><Link to="/testimonials">Testimonials</Link></li>
        <li onClick={closeMobileMenu}><Link to="/contact">Contact</Link></li>
        {/* <li onClick={closeMobileMenu}>2024 Information</li> */}
        {/* Add "2024 Information" link with dropdown */}
      
       
        <li>
          <span onClick={toggleInfoDropdown}>2024 Information</span>
          <ul className={`dropdown ${infoDropdownOpen ? 'open' : ''}`}>
            <li className="dropdown-details" onClick={closeMobileMenu}>
              <Link className="dropdown-details" to="/enrolment-form">Enrolment Form</Link>
            </li>
            <li className="dropdown-details" onClick={closeMobileMenu}>
              <Link className="dropdown-details" to="/fees">Fees</Link>
            </li>
          </ul>
        </li>
        {/* Add Meals link */}
        <li onClick={closeMobileMenu}><Link to="/meals">Meals</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


