// Import React and CSS file
import React from 'react';
import './MealsPage.css';

// MealsPage component
function MealsPage() {
  return (
    <div className="page">
      <h2 className="heading">Meals</h2>
      <p>Discover our delightful menu options specially crafted for kids at the school crèche:</p>
      <div className="menu-list">
        <div className="menu-item">
          <h3 className="sub-heading">Breakfast</h3>
          <p>Our breakfast offerings are designed to energize young minds. From colorful fruit bowls to yummy cereal options, we ensure a cheerful and nutritious start to the day for your little ones.</p>
        </div>
        <div className="menu-item">
          <h3 className="sub-heading">Lunch</h3>
          <p>Lunchtime is a playful feast for the taste buds. Our menu includes kid-friendly favorites like smiley-faced sandwiches, mini wraps, and creative veggie plates to make lunch both delicious and fun.</p>
        </div>
        <div className="menu-item">
          <h3 className="sub-heading">Dinner</h3>
          <p>As the day winds down, our dinner options provide a comforting end. From mild and tasty pasta dishes to cozy soups, we ensure a satisfying and wholesome evening meal for the young ones at the crèche.</p>
        </div>
      </div>
    </div>
  );
}

// Export the MealsPage component
export default MealsPage;
