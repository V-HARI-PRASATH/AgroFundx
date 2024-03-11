// HomePage.jsx
import '../../assets/css/Home.css';
import img from '../../assets/images/login.jpg';
const Home = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Agro Funding Platform</h1>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2>Invest in Agriculture, Grow Together</h2>
          <p>
            Explore investment opportunities in agriculture and support farmers to
            cultivate sustainable and profitable crops.
          </p>
        </div>
        <img className='img' src={img}/>
      </section>

      <section className="features-section">
        <h2>Why Choose Agro Funding?</h2>
        <div className="feature">
          <h3>1. Diverse Investment Options</h3>
          <p>
            Choose from a variety of agricultural projects ranging from crop
            cultivation to livestock farming.
          </p>
        </div>
        <div className="feature">
          <h3>2. Impactful Investments</h3>
          <p>
            Your investments contribute to sustainable agriculture practices and
            support local farmers.
          </p>
        </div>
        <div className="feature">
          <h3>3. Transparent Tracking</h3>
          <p>
            Monitor the progress of your investments and receive updates on the
            projects you&apos;ve funded.
          </p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start?</h2>
        <p>Join Agro Funding today and be a part of the agricultural revolution!</p>
        {/* Add a button or link to the signup page */}
        {/* <Link to='/login'><a className="cta-button">
          Sign Up Now
        </a></Link> */}
      </section>

      <footer>
        <p>&copy; 2024 Agro Funding Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
