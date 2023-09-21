import React from 'react';
import './GalleryPage.css'; // Import your CSS file
import Image1 from '../assets/img1.jpeg'; 
import Image2 from '../assets/img2.jpeg'; 
import Image3 from '../assets/img3.jpeg'; 
import Image4 from '../assets/img4.jpeg'; 
import Image5 from '../assets/img5.jpeg'; 

function GalleryPage() {
  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="image-grid">
        <div className="image-item">
          <img src={Image1} alt="Image 1" />
          <p>Image 1 Description</p>
        </div>
        <div className="image-item">
          <img src={Image2} alt="Image 2" />
          <p>Image 2 Description</p>
        </div>
        <div className="image-item">
          <img src={Image3} alt="Image 3" />
          <p>Image 3 Description</p>
        </div>
        <div className="image-item">
          <img src={Image4} alt="Image 3" />
          <p>Image 3 Description</p>
        </div>
        <div className="image-item">
          <img src={Image5} alt="Image 3" />
          <p>Image 3 Description</p>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
