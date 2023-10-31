import React, { useState, useEffect } from 'react';
import './HomePage.css';


function HomePage() {
  const [marginTop, setMarginTop] = useState(130);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector('nav').offsetHeight;
      const scrollTop = window.scrollY || window.pageYOffset;

      // Adjust margin-top based on scroll position and navbar height
      setMarginTop(navbarHeight - Math.min(navbarHeight, scrollTop));
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="hero">
        <h2>Welcome to Little IQ's Creche</h2>
        <p>We provide a loving and educational environment for children to grow, learn, and explore.</p>
        <a href="#learn-more" className="cta-button">Learn More</a>
      </div>

      <div className="content-container" id="learn-more">
        <div className="subheadline">
        <p>
      At Little IQ's Creche, we go beyond traditional childcare.
       We are a haven for young minds,
      fostering an environment where curiosity is celebrated and creativity knows no bounds.
      Our team of passionate educators is dedicated to providing a nurturing space for your child's
      early years, ensuring they embark on a journey of discovery and joy.
    </p>
        </div>

        <div className="features">
        <h3>What Sets Us Apart</h3>
    <ul className="apart-ul">
      <li>Engaging Learning Spaces</li>
      <li>Personalized Attention for Every Child</li>
      <li>Holistic Approach to Early Education</li>
      <li>Safe and Secure Environment</li>
    </ul>
    <h3>Join the Little IQ Family</h3>
    <p>
      Choosing the right early learning environment is a crucial decision for your child's future.
      We invite you to explore Little IQ's Creche and discover why we are more than just a childcare center –
      we are a community where little minds thrive.
    </p>
        </div>

        <div className="cta" id="cta">
          <h3>Ready to Join Us?</h3>
          <p>If you have any questions or would like to learn more about our programs, please don't hesitate to contact us. We'd love to hear from you!</p>
          <p>Phone: 0815217387</p>
          <p>Email: info@littleiqcreche.com</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
