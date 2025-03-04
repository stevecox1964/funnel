import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="logo">DevExpert</div>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact-info">Contact</a></li>
          </ul>
        </nav>
        
        <div className="hero-section">
          <div className="hero-content">
            <h1>Transforming Ideas Into Digital Reality</h1>
            <p>Professional web and mobile development services tailored to your business needs</p>
            <div className="cta-buttons">
              <a href="#contact-form" className="primary-btn">Get Started</a>
              <a href="#services" className="secondary-btn">Learn More</a>
            </div>
          </div>
        </div>
      </header>

      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Web Development</h3>
            <p>Custom websites and web applications built with modern technologies.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Mobile Development</h3>
            <p>Native and cross-platform mobile apps for iOS and Android.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔍</div>
            <h3>UI/UX Design</h3>
            <p>User-centered design that enhances user experience and engagement.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3>Performance Optimization</h3>
            <p>Speed up your existing applications for better user experience.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>We are a team of passionate developers dedicated to creating exceptional digital experiences. With expertise in the latest technologies and frameworks, we deliver solutions that help businesses grow and succeed in the digital landscape.</p>
            <p>Our approach combines technical excellence with creative problem-solving to build applications that are not only functional but also intuitive and engaging for users.</p>
          </div>
        </div>
      </section>

      <section id="contact-info" className="contact-info-section">
        <h2>Contact Information</h2>
        <div className="contact-info-container">
          <div className="contact-info-card">
            <div className="contact-info-icon">✉️</div>
            <h3>Email</h3>
            <p>contact@devexpert.com</p>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-icon">📞</div>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-icon">📍</div>
            <h3>Address</h3>
            <p>123 Tech Street, Innovation City</p>
          </div>
        </div>
      </section>

      <section id="contact-form" className="contact-section">
        <h2>Get In Touch</h2>
        <div className="contact-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Tell us about your project"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">DevExpert</div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact-info">Contact</a>
          </div>
          <div className="social-links">
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">GitHub</a>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} DevExpert. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
