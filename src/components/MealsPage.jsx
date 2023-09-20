import React from 'react';
import './MealsPage.css'; // Import the CSS file

function MealsPage() {
  return (
    <div className="page">
      <h2 className="heading">Meals</h2>
      <p>Explore our delicious menu options:</p>
      <div className="menu-list">
        <div className="menu-item">
          <h3 className="sub-heading">Breakfast</h3>
          <p>We offer a variety of breakfast options to start your day right.</p>
        </div>
        <div className="menu-item">
          <h3 className="sub-heading">Lunch</h3>
          <p>Our lunch menu features a selection of nutritious and tasty dishes.</p>
        </div>
        <div className="menu-item">
          <h3 className="sub-heading">Dinner</h3>
          <p>Enjoy our chef's special dinner creations in a cozy atmosphere.</p>
        </div>
      </div>
    </div>
  );
}

export default MealsPage;


