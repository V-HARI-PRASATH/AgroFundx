import React from 'react';
import './About.css';

function About()
{
  return (
    <div className='about'>
    <div className='section'>
      <h1>About Our Fitness Trainer Management App</h1>
      <h3>
        Our fitness trainer management app is designed to streamline the administrative tasks
        involved in managing a fitness training business. With our app, fitness trainers can focus
        on what they do best - providing exceptional training and guidance to their clients - while
        we handle the administrative overhead.
      </h3>

      <h2>Key Features</h2>
      <ul>
        <li><h3>Client management: Easily manage client profiles, track progress, and communicate with clients.</h3></li>
        <li><h3>Appointment scheduling: Schedule training sessions, set reminders, and manage availability.</h3></li>
        <li><h3>Billing and payments: Generate invoices, track payments, and manage billing information.</h3></li>
        <li><h3>Workout and nutrition plans: Create personalized workout and nutrition plans for clients.</h3></li>
        <li><h3>Analytics and reporting: Gain insights into client performance and track business growth.</h3></li>
      </ul>

      <h2>Our Team</h2>
      <h3>
        Our team is dedicated to providing the best tools and solutions for fitness trainers. We are a
        passionate group of developers, designers, and fitness enthusiasts who believe in the power of
        technology to transform the fitness industry. We strive to create user-friendly and innovative
        solutions that empower fitness trainers to deliver exceptional experiences to their clients.
      </h3>

      <h2>Contact Us</h2>
      <h3>
        If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us.
        We would love to hear from you!
      </h3>
      <h3>Email: info@fitnessapp.com</h3>
      <h3>Phone: 123-456-7890</h3>
      </div>
    </div>
  );
};

export default About;