// HomePage.js
import React from 'react';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="home-container">

      <div className="content-container">
        <h1 className="Title">VaultWise</h1>
        <p className="Desc">Your personal expense tracking assistant.</p>
        <a className="Sign-in" href="/sign-in">Sign in</a>
      </div>

      <div className="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7936ed" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,133.3C672,149,768,203,864,202.7C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

    </div>
  );
}

export default HomePage;