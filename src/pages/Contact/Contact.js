import React, { useState } from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
    console.log(formData);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Reach Us</h2>
          <h3>
            <FaMapMarkerAlt className="icon" /> Our Location
          </h3>
          <p>
            ASRL LAB, BEL – 601, 5th Floor, Basic Engineering Lab, SRM Institute
            of Science and Technology, Kattankulathur, Chennai, Tamil Nadu
            603203, India
          </p>

          <h3>
            <FaEnvelope className="icon" /> Email Us
          </h3>
          <p>
            <a href="mailto:aer_association@mitindia.edu">
              aer_association@mitindia.edu
            </a>
          </p>

          <h3>
            <FaPhone className="icon" /> Call Us
          </h3>
          <p>
            <a href="tel:+917418996058">+91-7418996058</a>
          </p>

          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form">
          <h2>Send Us a Message </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
