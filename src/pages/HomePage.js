// HomePage.js
import React from 'react';
import '../styles/Home-Homepage.css';
import '../styles/About-Homepage.css'

function HomePage() {
  return (
    <div className="home-container">

      <div className="Home">
        <div className="Home-Content">
          <div className="Home-Info">
            <h1 className="Title">VaultWise</h1>
            <p className="Desc">Your personal expense tracking assistant.</p>
            <a className="Sign-in" href="/sign-in">Sign in</a>
          </div>
          <div className="wave-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7936ed" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,133.3C672,149,768,203,864,202.7C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          </div>
        </div>
      </div>

      <div className="About">
        <div className="About-Content text-center text-sm-start">
          <h2 className="About-Title">About</h2>
          <p className="About-Desc">VaultWise is a revolutionary AI-based platform that simplifies your banking experience. Our solution organizes your bank statements from a CSV file, presenting them in an easily digestible format to help you understand your finances better. By evaluating your spending patterns, identifying unnecessary expenses, and recommending ways to save, we make your money work smarter for you.</p>
        </div>

        <div className="card-deck">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card1 m-3 m-lg-1">
                  <h2 className="card-title">User-Friendly Interface</h2>
                  <p className="card-text">Our platform is designed to be intuitive and easy to use, transforming complex data into understandable insights about your finances.</p>
                  <button className="card-btn">Go somewhere</button>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card2 m-3 m-lg-1">
                  <h2 className="card-title">Smart Financial Analytics</h2>
                  <p className="card-text">Leveraging AI technology, we provide intelligent analysis on your spending habits, helping you to make informed financial decisions.</p>
                  <button className="card-btn">Go somewhere</button>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card3 m-3 m-lg-1">
                  <h2 className="card-title">Personalized Recommendations</h2>
                  <p className="card-text">Based on your financial behavior, we suggest personalized tips and strategies to help you save more and spend wisely.</p>
                  <button className="card-btn">Go somewhere</button>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card4 m-3 m-lg-1">
                  <h2 className="card-title">Safe & Secure</h2>
                  <p className="card-text">At VaultWise, your financial security is our priority. We use top-tier encryption to ensure your data is always protected.</p>
                  <button className="card-btn">Go somewhere</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default HomePage;
