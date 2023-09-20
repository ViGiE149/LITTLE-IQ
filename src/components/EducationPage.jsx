import React from 'react';
import './EducationPage.css'; // Import your CSS file

function EducationPage() {
  return (
    <div className="unique-education-container">
      <h2 className="unique-h2">Education Programs</h2>
      <ul className="unique-program-list">
        <li className="unique-program-item">
          <h3 className="unique-h3">Infant Care</h3>
          <p className="unique-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, justo eget tincidunt posuere.</p>
        </li>
        <li className="unique-program-item">
          <h3 className="unique-h3">Toddler Playgroup</h3>
          <p className="unique-p">Curabitur euismod augue non lacus interdum, ac posuere velit elementum. Fusce convallis vitae felis vitae dictum.</p>
        </li>
        <li className="unique-program-item">
          <h3 className="unique-h3">Preschool Education</h3>
          <p className="unique-p">Vivamus lacinia velit sit amet dui volutpat, quis varius libero scelerisque. Nam fermentum, felis in rhoncus.</p>
        </li>
        <li className="unique-program-item">
          <h3 className="unique-h3">After-School Enrichment</h3>
          <p className="unique-p">Proin tincidunt auctor justo, vel cursus metus vehicula non. Integer sed feugiat libero, sed congue tellus.</p>
        </li>
      </ul>
    </div>
  );
}

export default EducationPage;
