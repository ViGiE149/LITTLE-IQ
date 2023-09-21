import React from 'react';
import './HomePage.css';


function HomePage() {
  return (
    <div className="home-container">
      <div className="hero">
        <h2>Welcome to Little IQ Creche</h2>
        <p>We provide a loving and educational environment for children to grow, learn, and explore.</p>
        <a href="#cta" className="cta-button">Learn More</a>
      </div>

      <div className="content-container">
        <div className="subheadline">
          <p>At Little IQ Creche, we believe in nurturing each child's natural curiosity and creativity. Our dedicated staff is committed to providing:</p>
        </div>

        <div className="features">
          <h3>Our Features</h3>
          <ul>
            <li>Quality Early Childhood Education</li>
            <li>Safe and Supportive Care</li>
            <li>Interactive and Fun Learning Experiences</li>
          </ul>
        </div>

        <div className="cta" id="cta">
          <h3>Ready to Join Us?</h3>
          <p>If you have any questions or would like to learn more about our programs, please don't hesitate to contact us. We'd love to hear from you!</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: info@littleiqcreche.com</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
