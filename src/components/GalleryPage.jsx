import React from 'react';
import './GalleryPage.css'; // Import your CSS file

function GalleryPage() {
  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="image-grid">
        <div className="image-item">
          <img src="image1.jpg" alt="Image 1" />
          <p>Image 1 Description</p>
        </div>
        <div className="image-item">
          <img src="image2.jpg" alt="Image 2" />
          <p>Image 2 Description</p>
        </div>
        <div className="image-item">
          <img src="image3.jpg" alt="Image 3" />
          <p>Image 3 Description</p>
        </div>
     
      </div>
    </div>
  );
}

export default GalleryPage;
