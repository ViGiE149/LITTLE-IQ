import React, { useState } from 'react';
import './GalleryPage.css'; // Import your CSS file
import Image1 from '../assets/img1.jpeg'; 
import Image2 from '../assets/img2.jpeg'; 
import Image3 from '../assets/img3.jpeg'; 
import Image4 from '../assets/img4.jpeg'; 
import Image5 from '../assets/img5.jpeg'; 

function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filterImages = () => {
    switch (selectedFilter) {
      case 'uniform':
        return [Image1, Image2]; // Include only images related to uniforms
      case 'classrooms':
        return [Image3, Image4]; // Include only images related to classrooms
      case 'staff':
        return [Image5]; // Include only images related to staff
      case 'events':
        return [Image1, Image3, Image5]; // Include only images related to events
      default:
        // 'all' filter or unknown filter, include all images
        return [Image1, Image2, Image3, Image4, Image5];
    }
  };

  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="filter-options">
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('uniform')}>Uniform</button>
        <button onClick={() => handleFilterChange('classrooms')}>Classrooms</button>
        <button onClick={() => handleFilterChange('staff')}>Staff</button>
        <button onClick={() => handleFilterChange('events')}>Events</button>
      </div>
      <div className="image-grid">
        {filterImages().map((image, index) => (
          <div className="image-item" key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
            <p>{`Image ${index + 1} Description`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
