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
        Offering a warm and safe environment before anything is the biggest
       goal also with quality education that is provided from a close and 
       personal attention to each child which is essential for quality 
       experience to all children. Adequate personnel will be hired to ensure
        each child has the proper supervision whilst in our care
      </p>

      <h3 className="unique-h3">Our Programs</h3>
      <p className="unique-p">
      Little IQ's will offer child care services for kids between 
      the ages of 6 months and 6 years,
      we will be offering services from 06:30 am to 17:00 pm. 
      Children will be exposed to arts; crafts; general learning;
       group activities; problem solving skills; musicals; socialising
       for our infants we will be providing them with visual equipments
        that helps arouse their little minds and sounds. We care for every 
        students growing mind and body.
      </p>


      <h3 className="unique-h3">Objectives</h3>
      <p className="unique-p">
      to develop a sustainable, profitable start-up business
     create a service based operation whose primary goal is to 
     exceed customers expectations
      </p>

      <h3 className="unique-h3">Key to success</h3>
      <p className="unique-p">
     
    <li>The quality of service being offered</li>
    <li>Creating and maintaining a highly regarded reputation</li>
    <li>Certified educators and child workers</li>
    <li>Marketing</li>
    <li>Competitive pricing</li>
    <li>Flexible hours</li>

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
