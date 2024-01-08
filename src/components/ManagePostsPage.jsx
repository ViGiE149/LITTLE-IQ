import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import './ViewPost.css'; // Import your CSS file for styling
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Link } from 'react-router-dom';

const ManagePostPage = () => {
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

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const handleDownload = () => {
    const image = new Image();
    image.src = posts[photoIndex].imageUrl;

    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = image.src;
    link.download = `image_${posts[photoIndex].id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDeletePost = async (postId) => {
    try {
      const postRef = doc(db, 'posts', postId);
      await deleteDoc(postRef);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
      setError('Error deleting post. Please try again.');
    }
  };

  // const handleEditPost = (postId) => {
  //   // Implement the logic to navigate to the edit page with the postId
  //   console.log(`Editing post with ID: ${postId}`);
  // };

  return (
    <div className="view-post-page-container">
      <h2 className="view-post-header">View Posts</h2><span>    <Link className="post-li" to="/post" >
         <button className="post-link" type="button">
     back
          </button>
          </Link></span>
      {loading && <p className="loading-message">Loading posts...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && (
        <ul className="post-list">
          {posts.map((post, index) => (
            <li key={post.id} className="post-item">
              <p className="post-text">{post.text}</p>
              {post.imageUrl && (
                <div>
                  <img
                    className="post-image clickable"
                    src={post.imageUrl}
                    alt="Post"
                    onClick={() => openLightbox(index)}
                  />
                  <button onClick={handleDownload}>Download</button>
                </div>
              )}
              <p className="post-timestamp">Posted on: {formatDate(post.timestamp)}</p>
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
              {/* <button onClick={() => handleEditPost(post.id)}>Edit</button> */}
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

export default ManagePostPage;
