import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactPage.css";

const Loader = () => <div className="loader">Sending email...</div>;

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (e) => {
    e.preventDefault();
    const errors = {};

    const formData = new FormData(e.currentTarget);

    if (!formData.get('name').trim()) {
      errors.name = "Name is required";
      alert("Name is required");
      return;
    }

    if (!formData.get('subject').trim()) {
      errors.subject = "Subject is required";
      alert("Subject is required");
      return;
    }

    if (!formData.get('email').trim()) {
      errors.email = "Email is required";
      alert("Email is required");
      return;
    }

    if (!formData.get('message').trim()) {
      errors.message = "Message is required";
      alert("Message is required");
      return;
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm(e)) {
      return;
    }

    setLoading(true);
    const formData = new FormData(e.currentTarget);

    const templateParams = {
      from_name: formData.get('name').trim(),
      mail_from: formData.get('email').trim(),
      mail_to: "vgwala149@gmail.com",
      subject: formData.get('subject').trim(),
      message: formData.get('message').trim(),
    };

    emailjs
      .send(
        "service_iht2ej9",
        "template_ma66v75",
        templateParams,
        "sdec_-eHbbd95KUHJ"
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess(true);
          console.log(result.text);
        },
        (error) => {
          setLoading(false);
          setError(true);
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="form-container">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or would like to get in touch with us,
          please use the contact information below:
        </p>

        <div className="contact-info">
          <strong>Address:</strong>
          <div>
            <p></p>
            <p>37 Phunga road unit 2 extension</p>
            <p>Mpumalanga township</p>
            <p>hammersdale</p>
            <p>3699</p>
          </div>

          <p>
            <strong>Email:</strong>
            <a className="contact-2-info" href="mailto:littleiqs2023@gmail.com">
              <span>littleiqs2023@gmail.com</span>
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a className="contact-2-info" href="tel:0823656862">
              <span>0823656862</span>
            </a>
          </p>
        </div>
        {loading && <Loader />}
        <h3>Contact Form</h3>

        {success && <p>Email sent successfully!</p>}
        {error && <p>Error sending email. Please try again later.</p>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            validateForm(e) && sendEmail(e);
          }}
        >
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11645.479376698997!2d30.622922579234377!3d-29.800137847931754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef6f18bde9ee64f%3A0xce4f18abe718c6f9!2sPhunga%20Rd%2C%20Mpumalanga%20B%2C%20Mpumalanga%2C%203699!5e0!3m2!1sen!2sza!4v1697701284794!5m2!1sen!2sza"
          frameBorder="1"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;
