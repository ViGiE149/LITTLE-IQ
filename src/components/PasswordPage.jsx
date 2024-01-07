import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { db } from './firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import './PasswordPage.css';

function PasswordPage() {
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [userPassword, setUserPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [isPasswordUpdated, setIsPasswordUpdated] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkPassword = async () => {
    try {
        setLoading(true);
      const passwordDocRef = doc(db, 'littleiqs-password', 'littleiqs-password-2024');
      const passwordDocSnapshot = await getDoc(passwordDocRef);
      if (passwordDocSnapshot.exists()) {
        const correctPassword = passwordDocSnapshot.data().password;
        console.log(correctPassword)
        setIsPasswordCorrect(correctPassword === userPassword);
      }
    } catch (error) {
      console.error('Error checking password:', error);
    }  finally {
        setLoading(false);
      }
  };

  const updatePassword = async () => {
    try {
      setLoading(true);
      const passwordDocRef = doc(db, 'littleiqs-password', 'littleiqs-password-2024');
      await updateDoc(passwordDocRef, { password: newPassword });
      setIsPasswordUpdated(true);
    } catch (error) {
      console.error('Error updating password:', error);
    } finally {
      setLoading(false);
    }
  };

  const proceedToManagePosts = () => {
    navigate('/post'); // Use navigate function for navigation
  };

 // ... (imports and other code)

return (
    <div className="password-page-container">
      <h2>Password Page</h2>
      <p>Please enter your password:</p>
      <input
        className="password-input"
        type="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
  
      <button className="submit-button" onClick={checkPassword} disabled={loading}>
        {loading ? 'Checking Password...' : 'Check Password'}
      </button>
  
      {isPasswordCorrect && !isPasswordUpdated && (
        <div>
          {/* ... (other code) */}
          <input
            className="password-input"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button className="submit-button" onClick={updatePassword} disabled={loading}>
            Update Password
          </button>
          {/* ... (other code) */}
          <button className="proceed-button" onClick={proceedToManagePosts}>
            No, thank you. Proceed to Manage Posts
          </button>
        </div>
      )}
  
      {isPasswordCorrect && isPasswordUpdated && (
        <div>
          {/* ... (other code) */}
          <button className="proceed-button" onClick={proceedToManagePosts}>
            Proceed to Manage Posts
          </button>
        </div>
      )}
  
      {!isPasswordCorrect && (
        <p>Incorrect password. Please try again or contact support.</p>
      )}
    </div>
  );
  

}

export default PasswordPage;
