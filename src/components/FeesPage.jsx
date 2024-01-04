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
        <li className="fee-item">Grade R: R870/month</li>
        <li className="fee-item">Grade RR: R710/month</li>
        <li className="fee-item">Grade RRR: R710/month</li>
        <li className="fee-item">Baby class: R760/month</li>
      </ul>

      <h4>aftercare :</h4>
      <p>applies at 15:00mp : R50 per day</p>
      <ul className="fee-list">
        <li className="fee-item">aftercare learners : R650/month</li>
        <li className="fee-item">weekend aftercare(9:00am - 17:00mp non-catered 1 day): R150</li>
        <li className="fee-item">weekend aftercare(9:00am - 17:00mp catered): R750</li>
        <li className="fee-item">sleepover : R350</li>
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
