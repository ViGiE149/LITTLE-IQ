import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactPage.css';

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual Email.js credentials
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        setLoading(false);
        setSuccess(true);
        console.log(result.text);
      }, (error) => {
        setLoading(false);
        setError(true);
        console.log(error.text);
      });
  };

  return (
    <div className="contact-page">
      <div className="form-container">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to get in touch with us, please use the contact information below:</p>

        <div className="contact-info">
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
          <p><strong>Email:</strong> vgwala149@gmail.com</p>
          <p><strong>Phone:</strong> 0784915138</p>
        </div>

        <h3>Contact Form</h3>
        {loading && <p>Sending email...</p>}
        {success && <p>Email sent successfully!</p>}
        {error && <p>Error sending email. Please try again later.</p>}
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Embed a map (Replace the iframe source with your actual map source) */}
      <div className="map">
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.2891081582047!2d31.035357374841322!3d-29.855935075019108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7a84a0a9c59e7%3A0x2ecd5dd9b1a70d9e!2sLonsdale%20Residence!5e0!3m2!1sen!2sza!4v1695285993964!5m2!1sen!2sza"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;
