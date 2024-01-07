import React, { useState, useEffect } from 'react';
import './FeesPage.css';
import { Link } from 'react-router-dom';
import { doc, updateDoc,getDoc } from 'firebase/firestore';
import { db } from './firebase';

function FeesPage() {
  const [registrationFee, setRegistrationFee] = useState(300);
  const [monthlyFees, setMonthlyFees] = useState({
    gradeR: 870,
    gradeRR: 710,
    gradeRRR: 710,
    babyClass: 760,
  });
  const [aftercareFees, setAftercareFees] = useState({
    'applies_at_15:00mp': 50,
    aftercare_Learners: 650,
    weekend_Aftercare_NonCatered: 150,
    weekend_Aftercare_Catered: 750,
    sleepover: 350,
  });
  const [loading, setLoading] = useState(false);
  const [feesData, setFeesData] = useState(null);

  useEffect(() => {
    const fetchFees = async () => {
      try {
        const feesDocRef = doc(db, 'fees', 'fees-littleiqs-2024');
        const feesDocSnapshot = await getDoc(feesDocRef);
        if (feesDocSnapshot.exists()) {
          const fetchedFeesData = feesDocSnapshot.data();
          setFeesData(fetchedFeesData);
          setRegistrationFee(fetchedFeesData.registrationFee || 300);
          setMonthlyFees(fetchedFeesData.monthlyFees || monthlyFees);
          setAftercareFees(fetchedFeesData.aftercareFees ||aftercareFees);
        }
      } catch (error) {
        console.error('Error fetching fees:', error);
      }
    };

    fetchFees();
  }, []);

  return (
    <div className="container-main">
      <div className="container">
        <h2>Fees</h2>
        <h3>Registration Fee</h3>
        <p>The registration fee for our programs is R {feesData?.registrationFee || 300}.</p>

        <h3>Monthly Fees</h3>
        <p>We offer flexible monthly fee options based on your child's age and program:</p>
        <ul className="fee-list">
          {Object.keys(monthlyFees).map((category) => (
            <li key={category} className="fee-item">
              {category}: R {feesData?.monthlyFees?.[category] || monthlyFees[category]}/month
            </li>
          ))}
        </ul>

        <h3>Aftercare Fees</h3>
        <ul className="fee-list">
          {Object.keys(aftercareFees).map((category) => (
            <li key={category} className="fee-item">
              {category}: R {feesData?.aftercareFees?.[category] || aftercareFees[category]}/month
            </li>
          ))}
        </ul>

        <p>Our monthly fees cover the cost of quality early childhood education, meals, and a safe learning environment.</p>

        <div className="fees-section">
          <h3>Ready to Enroll?</h3>
          <p>If you have any questions or would like to enroll your child in our programs, please don't hesitate to contact us. We'd love to assist you!</p>
          <Link to="/contact" className="cta-button">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeesPage;
