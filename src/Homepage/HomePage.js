// HomePage.js
import React from 'react';
import Home from './Home.js';
import About from './About.js';
import GettingStarted from './GettingStarted.js';
import Contact from './Contact.js';

function HomePage() {
  return (
    <div className="home-container">
      <Home />
      <About />
      <GettingStarted />
      <Contact />
    </div>
  );
}

export default HomePage;