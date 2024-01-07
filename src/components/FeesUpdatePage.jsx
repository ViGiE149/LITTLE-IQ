import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from './firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import './feesUpdate.css';

function FeesUpdatePage() {
  const [registrationFee, setRegistrationFee] = useState('300');
  const [monthlyFees, setMonthlyFees] = useState({
    gradeR: '870',
    gradeRR: '710',
    gradeRRR: '710',
    babyClass: '760',
  });
  const [aftercareFees, setAftercareFees] = useState({
    aftercare_Learners: '650',
    weekend_Aftercare_NonCatered: '150',
    weekend_Aftercare_Catered: '750',
    sleepover: '350',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFees = async () => {
      try {
        const feesDocRef = doc(db, 'fees', 'fees-littleiqs-2024');
        const feesDocSnapshot = await getDoc(feesDocRef);
        if (feesDocSnapshot.exists()) {
          const feesData = feesDocSnapshot.data();
          setRegistrationFee(feesData.registrationFee || '300');
          setMonthlyFees(feesData.monthlyFees || monthlyFees);
          setAftercareFees(feesData.aftercareFees || aftercareFees);
        }
      } catch (error) {
        console.error('Error fetching fees:', error);
      }
    };

    fetchFees();
  }, []);

  const handleSaveChanges = async () => {
    try {
      setLoading(true);
      const feesDocRef = doc(db, 'fees', 'fees-littleiqs-2024');
      await updateDoc(feesDocRef, {
        registrationFee,
        monthlyFees,
        aftercareFees,
      });
      console.log('Fees updated successfully!');
    } catch (error) {
      console.error('Error updating fees:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fees-update-container">
      <div className="fees-update-content">
        <h2 className="fees-update-heading">Fees</h2>
        <h3 className="fees-update-subheading">Registration Fee</h3>
        <p>
          The registration fee for our programs is R
          <input
            className="fees-update-input"
            type="text"
            value={registrationFee}
            onChange={(e) => {
              const inputValue = e.target.value;
              if (/^\d*$/.test(inputValue)) {
                setRegistrationFee(inputValue);
              }
            }}
          />
          .
        </p>

        <h3 className="fees-update-subheading">Monthly Fees</h3>
        <p>We offer flexible monthly fee options based on your child's age and program:</p>
        <ul className="fees-update-list">
          {Object.keys(monthlyFees).map((category) => (
            <li key={category} className="fees-update-list-item">
              {category}: R
              <input
                className="fees-update-input"
                type="text"
                value={monthlyFees[category]}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (/^\d*$/.test(inputValue)) {
                    setMonthlyFees({ ...monthlyFees, [category]: inputValue });
                  }
                }}
              />
              /month  
              <br/>
              <br/>
              <hr />
            </li>
          
          ))}
        </ul>

        <h3 className="fees-update-subheading">Aftercare Fees</h3>
        <ul className="fees-update-list">
          {Object.keys(aftercareFees).map((category) => (
            <li key={category} className="fees-update-list-item">
              {category}: R
              <input
                className="fees-update-input"
                type="text"
                value={aftercareFees[category]}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (/^\d*$/.test(inputValue)) {
                    setAftercareFees({ ...aftercareFees, [category]: inputValue });
                  }
                }}
              />
              /month
               <br/>
              <br/>
              <hr />
            </li>
          ))}
        </ul>

        <p>Our monthly fees cover the cost of quality early childhood education, meals, and a safe learning environment.</p>

        <div className="fees-update-section">
          <h3>Ready to Enroll?</h3>
          <p>
            If you have any questions or would like to enroll your child in our programs, please don't hesitate to
            contact us. We'd love to assist you!
          </p>
          <Link to="/contact" className="fees-update-cta-button">
            Contact Us
          </Link>
        </div>

        <button className="fees-update-button" onClick={handleSaveChanges} disabled={loading}>
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}

export default FeesUpdatePage;
