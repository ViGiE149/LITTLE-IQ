// PostPage.js
import React, { useState } from 'react';
import { storage, db } from './firebase';
import { getStorage ,ref,uploadBytes, getDownloadURL,uploadBytesResumable} from "firebase/storage";
import './Post.css';
import { collection, addDoc, query, where, getDocs,serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';


const PostPage = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    // Upload image to Firebase Storage if it exists
    let uploadTask;
    if (image) {
      const storageInstance = getStorage();
      const storageRef = ref(storageInstance, `images/${image.name}`);
      uploadTask = uploadBytesResumable(storageRef, image);

      // Register observers for 'state_changed', 'error', and 'complete' events
      uploadTask.on('state_changed',
        (snapshot) => {
          // Handle progress events
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error('Error during upload:', error);
          setError('Error during upload. Please try again.');
          setLoading(false);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL
          getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {
              console.log('File available at', url);
              setImageUrl(url);

              // Add post to Firestore
              const postRef = collection(db, 'posts');
              return addDoc(postRef, {
                text,
                imageUrl: url,
                timestamp: serverTimestamp(),
              });
            })
            .then(() => {
              // Reset form state
              setText('');
              setImage(null);
              setImageUrl('');
            })
            .catch((urlError) => {
              console.error('Error getting download URL:', urlError);
              setError('Error getting download URL. Please try again.');
            })
            .finally(() => {
              setLoading(false);
            });
        }
      );
    } else {
      // Add post to Firestore without an image
      const postRef = collection(db, 'posts');
      addDoc(postRef, {
        text,
        timestamp: serverTimestamp(),
      })
        .then(() => {
          // Reset form state
          setText('');
          setImage(null);
          setImageUrl('');
        })
        .catch((error) => {
          console.error('Error adding post without image:', error);
          setError('Error submitting post. Please try again.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  

  };

  return (
    <div className="post-page-container">
      <h2>Create a New Post</h2>
      <form onSubmit={handlePostSubmit}>
        <label>
          Text: <br />
          <textarea value={text} onChange={handleTextChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="file" accept="images/*" onChange={handleImageChange} />
        </label>
        <br />
        {loading && <p>Uploading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <br />
        <button type="submit" disabled={loading}>
          Submit Post
        </button>
     
         <Link className="post-link" to="/managepost" >
         <button className="post-link" type="button">
          Manage Posts
          </button>
          </Link>

          <Link className="post-link" to="/feesUpdate" >
         <button className="post-link" type="button">
          Update Fees
          </button>
          </Link>
       
        
      </form>
    </div>
  );
};

export default PostPage;
