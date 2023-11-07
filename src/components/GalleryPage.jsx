import React, { useState } from 'react';
import './GalleryPage.css'; // Import your CSS file
import Image1 from '../assets/img1.jpeg'; 
import Image2 from '../assets/img2.jpeg'; 
import Image3 from '../assets/img3.jpeg'; 
import Image4 from '../assets/img4.jpeg'; 
import Image5 from '../assets/img5.jpeg'; 
import uniform1 from '../assets/uniform 1.jpeg'; 
import uniform2 from '../assets/uniform2.jpeg'; 
import uniform3 from '../assets/uniform3.jpeg'; 
import uniform4 from '../assets/uniform4.jpeg'; 
import classroom2 from '../assets/classroom2.jpeg'; 
import classroom3 from '../assets/classroom3.jpeg'; 
import school1 from '../assets/school1.jpeg'; 
import my_girl from '../assets/my_girl.jpeg'; 
import red from '../assets/event-red.jpeg'; 
import zoo1 from '../assets/event-zoo1.jpeg'; 
import hunting1 from '../assets/event-egg-hunting.jpeg'; 
import hart1 from '../assets/event-hart-day.jpeg'; 
import story1 from '../assets/story-day-classroom.jpeg'; 
import ms1 from '../assets/massage1.jpeg'; 
import perents1 from '../assets/perents.jpeg';
import movie1 from '../assets/movie1.jpeg';
import littleIq from '../assets/little iq icon.jpeg';
import birthday2 from '../assets/birthday2.jpeg';
import kids from '../assets/kids.jpeg';
import ms2 from '../assets/haritage.jpeg';
import MD from '../assets/Md.mp4';

function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filterImages = () => {
    switch (selectedFilter) {
      case 'uniform':
        return [uniform1,uniform2,uniform3,uniform4]; // Include only images related to uniforms
      case 'classrooms':
        return [school1,movie1, kids,classroom3,classroom2]; // Include only images related to classrooms
      case 'staff':
        return [MD]; // Include only images related to staff
      case 'events':
        return [red, zoo1, hunting1,ms2]; // Include only images related to events
      default:
        // 'all' filter or unknown filter, include all images
        return [littleIq,ms1,Image1, Image2, Image3, Image4,birthday2,ms2,Image5,uniform1,uniform2,uniform3,uniform4,classroom2, classroom3,my_girl,uniform4,red,hart1,zoo1, hunting1,story1,perents1];
    }
  };

  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div>
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('uniform')}>Uniform</button>
        <button onClick={() => handleFilterChange('classrooms')}>Classrooms</button>
        <button onClick={() => handleFilterChange('staff')}>Videos</button>
        <button onClick={() => handleFilterChange('events')}>Events</button>
      </div>
      <div className="image-grid">
        {filterImages().map((image, index) => (
          <div className="image-item" key={index}>
            {selectedFilter === 'staff' ? (
              <video controls>
                <source src={image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={image} alt={`Image ${index + 1}`} />
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
}
export default GalleryPage;
