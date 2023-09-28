// EducationPage.js

import React from 'react';
import './EducationPage.css';

function EducationPage() {
  return (
    <div className="education-container">
      <h2 className="education-header">Discover Our Programs</h2>
      <div className="programs-grid">
        <div className="program-item">
          <h3 className="program-title">Infant Care</h3>
          <p className="program-description">Providing a nurturing environment for the littlest ones. Our infant care program focuses on creating a safe and comfortable space for early development.</p>
        </div>
        <div className="program-item">
          <h3 className="program-title">Toddler Playgroup</h3>
          <p className="program-description">Encouraging social interaction and play-based learning. Our toddler playgroup program is designed to stimulate curiosity and foster early friendships.</p>
        </div>
        <div className="program-item">
          <h3 className="program-title">Preschool Education</h3>
          <p className="program-description">Building a strong foundation for future learning. Our preschool education program emphasizes cognitive and social development through engaging activities.</p>
        </div>
        <div className="program-item">
          <h3 className="program-title">After-School Enrichment</h3>
          <p className="program-description">Extending learning beyond the classroom. Our after-school enrichment program offers a variety of activities to complement and enhance the overall educational experience.</p>
        </div>
      </div>
      <p className="">Education
Goofy EducationOur classes are limited to only 15 learners per class to ensure personalised education.
Meeting with parents reporting on children’s progress: A parents evening is held on a quarterly basis when report cards go out. However if a teacher or parent has any concerns a separate meeting throughout the year can be arranged.</p>
    </div>
  );
}

export default EducationPage;
