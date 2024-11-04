import React from 'react';
import './styles.css';

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to Nexus Club</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <div className="section" id="about">
        <h2>About Nexus</h2>
        <p>Nexus is a vibrant community of developers and innovators.</p>
      </div>
      <div className="section" id="events">
        <h2>Upcoming Events</h2>
        <p>Stay tuned for our exciting events!</p>
      </div>
      <div className="section" id="contact">
        <h2>Contact Us</h2>
        <p>Reach out at contact@nexusclub.com</p>
      </div>
    </div>
  );
}

export default App;
