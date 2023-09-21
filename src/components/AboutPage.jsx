import React, { useState, useEffect } from 'react';
import './AboutPage.css'; // Import your CSS file
import owner1 from '../assets/owner1.jpg';
import owner2 from '../assets/owner2.jpg';
import teacher2 from '../assets/teacher2.jpg';

function AboutPage() {
  // Define the images for the slider
  const sliderImages = [owner1, owner2, teacher2];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle automatic image sliding
  useEffect(() => {
    const timer = setInterval(() => {
      // Move to the next image
      setCurrentImageIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => {
      // Clear the timer when the component unmounts
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="unique-education-container">
      <h2 className="unique-h2">About Us</h2>
      <p>Welcome to Little IQ Creche, where we provide a safe and nurturing environment for children to learn and grow.</p>

      <div className="image-slider-container">
        <div className="image-slider-content">
          <img
            src={sliderImages[currentImageIndex]}
            alt="Owner or Teacher"
            className="image-slider-img"
          />
        </div>
      </div>

      <h3 className="unique-h3">Our Mission</h3>
      <p className="unique-p">
        Our mission is to foster creativity, curiosity, and a love for learning
        in every child. We believe that every child has unique talents and
        potential, and our dedicated staff is committed to helping them
        discover and develop these qualities.
      </p>

      <h3 className="unique-h3">Our Programs</h3>
      <p className="unique-p">
        We offer a range of programs tailored to different age groups, from infants to preschoolers. Our programs include:
      </p>
      <ul>
        <li>Infant Care</li>
        <li>Toddler Playgroup</li>
        <li>Preschool Education</li>
        <li>After-School Enrichment</li>
      </ul>

      <h3 className="unique-h3">Our Team</h3>
      <p className="unique-p">
        Our team consists of experienced and caring educators who are passionate about early childhood education. They create a supportive and stimulating environment where children can thrive.
      </p>

      <h3 className="unique-h3">Visit Us</h3>
      <p className="unique-p">
        We invite you to visit our creche and learn more about our programs. Feel free to contact us to schedule a tour or ask any questions you may have.
      </p>
      
      <p className="unique-p">We look forward to partnering with you in your child's educational journey!</p>
    </div>
  );
}

export default AboutPage;
