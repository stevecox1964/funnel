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
            <p>Professional AI automation / web and mobile development services tailored to your business needs</p>
            <div className="cta-buttons">
              <a href="#services" className="secondary-btn">Learn More</a>
            </div>
          </div>
        </div>
      </header>

      <section id="services" className="services-section">
        <h2>My Services</h2>
        <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">🤖</div>
            <h3>AI Automation</h3>
            <p>Automate tasks and processes using AI technologies. </p>
          </div>
          <div className="service-card">
          <div className="service-icon">🌐</div>
            <h3>Web scrapping</h3>
            <p>Scrape public data and information that can be used to streamline your business operations.</p>
          </div>
          <div className="service-card">
          <div className="service-icon">📞</div>
            <h3>Virtual Assistants</h3>
            <p>Autonomously takes calls for your company.</p>
          </div>
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
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I am a software developer / software engineer with over 25 years of experience building software for companies like</p>  
            <p>Lumeris, HP, ExxonMobile, and others.</p>
            <p>With expertise in the latest technologies and frameworks, I deliver solutions that help businesses grow and succeed in the digital landscape.</p>
          </div>
        </div>
      </section>

      <section id="contact-info" className="contact-info-section">
        <h2>Contact Information</h2>
        <div className="contact-info-container">
          <div className="contact-info-card">
            <div className="contact-info-icon">✉️</div>
            <h3>Email</h3>
            <p>stevecoxiscool@gmail.com</p>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-icon">📍</div>
            <h3>Address</h3>
            <p>123 Tech Street, Conroe , Texas</p>
          </div>
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
            <a href="https://www.linkedin.com/in/steve-cox-229886b/" className="social-icon">LinkedIn</a>
            <a href="https://github.com/stevecox1964" className="social-icon">GitHub</a>
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
