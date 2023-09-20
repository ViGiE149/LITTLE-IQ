import React from 'react';
import './FeesPage.css';

function FeesPage() {
  return (
    <div>
      <h2>Fees</h2>
      <h3>Registration Fee</h3>
      <p>The registration fee for our programs is R50.</p>

      <h3>Monthly Fees</h3>
      <p>We offer flexible monthly fee options based on your child's age and program:</p>
      <ul>
        <li>Infants (0-2 years): R600/month</li>
        <li>Toddlers (2-4 years): R650/month</li>
        <li>Preschoolers (4-6 years): R200/month</li>
      </ul>
      
      <p>Our monthly fees cover the cost of quality early childhood education, meals, and a safe learning environment.</p>
    </div>
  );
}

export default FeesPage;
