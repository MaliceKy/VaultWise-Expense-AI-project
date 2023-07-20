// About.js
import React from 'react';
import './styles/About.css';

function About() {
  return (
    <div className="About" id="About">
        <div className="About-Content">
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
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card2 m-3 m-lg-1">
                  <h2 className="card-title">Smart Financial Analytics</h2>
                  <p className="card-text">Leveraging AI technology, we provide intelligent analysis on your spending habits, helping you to make informed financial decisions.</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card3 m-3 m-lg-1">
                  <h2 className="card-title">Personalized Recommendations</h2>
                  <p className="card-text">Based on your financial behavior, we suggest personalized tips and strategies to help you save more and spend wisely.</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card4 m-3 m-lg-1">
                  <h2 className="card-title">Safe & Secure</h2>
                  <p className="card-text">At VaultWise, your financial security is our priority. We use top-tier encryption to ensure your data is always protected.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
  );
}

export default About;
