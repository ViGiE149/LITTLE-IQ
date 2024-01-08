import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import './ViewPost.css'; // Import your CSS file for styling
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ViewPostPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, 'posts');
        const snapshot = await getDocs(postsCollection);
        const postsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Error fetching posts. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this effect runs once on mount

  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString(); // Adjust the format as needed
  };

  const openLightbox = (post) => {
    setPhotoIndex(posts.indexOf(post));
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const handleDownload = (post) => {
    const link = document.createElement('a');
    link.href = post.imageUrl;
    link.download = `media_${post.id}.${post.imageUrl.split('.').pop()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderMedia = (post) => {
    if (post.imageUrl) {
      const urlParts = post.imageUrl.split('?');
      const fileUrl = urlParts[0]; // Extract the file URL without parameters
      const fileType = fileUrl.split('.').pop().toLowerCase();
  
      if (['jpg', 'jpeg', 'png', 'gif'].includes(fileType)) {
        // Image
        return (
          <img
            className="post-image clickable"
            src={post.imageUrl}
            alt="Post"
            onClick={() => openLightbox(post)}
          />
        );
      } else if (['mp4', 'webm'].includes(fileType)) {
        // Video
        return (
          <video controls className="post-media clickable" onClick={() => openLightbox(post)}>
            <source src={post.imageUrl} type={`video/${fileType}`} />
            Your browser does not support the video tag.
          </video>
        );
      } else if (['mp3', 'ogg', 'wav'].includes(fileType)) {
        // Audio
        return (
          <audio controls className="post-media clickable" onClick={() => openLightbox(post)}>
            <source src={post.imageUrl} type={`audio/${fileType}`} />
            Your browser does not support the audio tag.
          </audio>
        );
      } else if (['pdf'].includes(fileType)) {
        // PDF
        return (
          <div className="post-media clickable" onClick={() => openLightbox(post)}>
            <p>This post contains a PDF. Click to view.</p>
          </div>
        );
      } else {
        // Unsupported file type
        console.error(`Unsupported file type: ${fileType}`);
        return (
          <div className="post-media">
            <p>Error: Unsupported file type (${fileType})</p>
          </div>
        );
      }
    }
  
    // No media
    return null;
  };
  

  return (
    <div className="view-post-page-container">
      <h2 className="view-post-header">View Posts</h2>
      {loading && <p className="loading-message">Loading posts...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id} className="post-item">
              <p className="post-text">{post.text}</p>
              {renderMedia(post)}
              <button onClick={() => handleDownload(post)}>Download</button>
              <p className="post-timestamp">Posted on: {formatDate(post.timestamp)}</p>
            </li>
          ))}
        </ul>
      )}
      {isOpen && (
        <Lightbox
          mainSrc={posts[photoIndex].imageUrl}
          nextSrc={posts[(photoIndex + 1) % posts.length].imageUrl}
          prevSrc={posts[(photoIndex + posts.length - 1) % posts.length].imageUrl}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + posts.length - 1) % posts.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % posts.length)}
        />
      )}
    </div>
  );
};

export default ViewPostPage;
