import React from 'react';
import './FeesPage.css';
import { Link } from 'react-router-dom';

function FeesPage() {
  return (
   <div className="container-main">
    <div className="container">
      <h2>Fees</h2>
      <h3>Registration Fee</h3>
      <p>The registration fee for our programs is R300.</p>

      <h3>Monthly Fees</h3>
      <p>We offer flexible monthly fee options based on your child's age and program:</p>
      <ul className="fee-list">
        <li className="fee-item">Infants (GradeR: 0-2 years): R800/month</li>
        <li className="fee-item">Toddlers (GradeRR:2-4 years): R650/month</li>
        <li className="fee-item">Preschoolers (GradeRRR:4-6 years): R650/month</li>
        <li className="fee-item">Baby class : R700/month</li>
      </ul>
      
      <p>Our monthly fees cover the cost of quality early childhood education, meals, and a safe learning environment.</p>
      
      <div className="fees-section">
        <h3>Ready to Enroll?</h3>
        <p>If you have any questions or would like to enroll your child in our programs, please don't hesitate to contact us. We'd love to assist you!</p>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </div>
     </div>
    </div>
  );
}

export default FeesPage;
