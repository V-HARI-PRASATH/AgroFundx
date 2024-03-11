// About.jsx
import '../../assets/css/About.css';
import img from '../../assets/images/profile.jpeg';

const About = () => {
  return (
    <div className="about-page">
      <div className="header">
        <h1>About Us</h1>
      </div>

      <div className="about-section">
        <p>
          Welcome to Agro Funding Platform, where we connect investors with sustainable agricultural projects.
          Our mission is to support local farmers, promote responsible farming practices, and provide a platform
          for individuals to invest in the future of agriculture.
        </p>

        <p>
          At Agro Funding, we believe in the power of collaboration. By investing in agriculture, you not only
          contribute to the growth of the farming community but also play a role in building a more sustainable and
          resilient food system.
        </p>
      </div>

      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-member">
          <img src={img} alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>Co-founder and CEO</p>
        </div>
        <div className="team-member">
          <img src={img} alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Co-founder and CTO</p>
        </div>
        <div className="team-member">
          <img src={img} alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Co-founder and CTO</p>
        </div>
      </div>

      <div className="aboutfooter">
        <p>&copy; 2024 Agro Funding Platform. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;
