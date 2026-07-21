import React from 'react';
import './aboutus.css'; // Ensure you have this CSS file in your project

import image1 from './assets/images/Ai-Solutions.jpeg';
import image2 from './assets/images/f500.png';

const images = {
  img1: image1,
  img2: image2,
};


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="mission-statement">
        <h2>Our Mission</h2>
        <p>To empower businesses through innovative AI solutions, enhancing efficiency and driving growth.</p>
      </section>
      
      <section className="benefits">
        <h2>Why Choose Us</h2>
        <div className="benefits-container">
          <div className="benefit-item">
          <img src={images.image1} alt="Custom Solutions"/>
            <h3>Custom Solutions</h3>
            <p>Unique AI-driven solutions tailored to meet the specific needs of your business.</p>
          </div>
          <div className="benefit-item">
          <img src={images.img1} alt="Custom Solutions"/>

            <h3>Expert Team</h3>
            <p>A dedicated team of AI experts committed to your business success.</p>
          </div>
          <div className="benefit-item">
          <img src={images.img1} alt="Custom Solutions"/>

            <h3>Proven Results</h3>
            <p>Documented success stories from businesses across various industries.</p>
          </div>
        </div>
      </section>
      
      <section className="our-clients">
        <h2>Our Clients</h2>
        <p>We are proud to partner with some of the most innovative companies worldwide.</p>
        {/* Client logos or testimonials could go here */}
        <img src={images.img1} alt="Custom Solutions"/>

        <div className="client-logos">

          {/* Add more as needed */}
        </div>
      </section>
      
      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>Interested in learning more about how we can help your business? Get in touch!</p>
        <p>Email: contact@datapulse.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
      <footer>
        <p>&copy; 2024 DataPulse</p>
      </footer>
    </div>
  );
};

export default AboutUs;
