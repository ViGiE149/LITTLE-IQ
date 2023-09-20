import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>If you have any questions or would like to get in touch with us, please use the contact information below:</p>
      
      <div className="contact-info">
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        <p><strong>Email:</strong> contact@example.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
      </div>
      
      <h3>Contact Form</h3>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
