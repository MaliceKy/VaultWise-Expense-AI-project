// HomePage.js
import React from 'react';
import '../styles/Home-Homepage.css';
import '../styles/About-Homepage.css'
import '../styles/GettingStarted-Homepage.css'
import '../styles/Contact-Homepage.css'

function HomePage() {
  return (
    <div className="home-container">

      <div className="Home" id="Home">
        <div className="Home-Content">
          <div className="Home-Info">
            <h1 className="Title">VaultWise</h1>
            <p className="Desc">Your personal expense tracking assistant.</p>
            <a className="Sign-in" href="/Sign-up">Sign up</a>
          </div>
          <div className="wave-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7936ed" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,133.3C672,149,768,203,864,202.7C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          </div>
        </div>
      </div>

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

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7a37ed" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,80C384,53,480,75,576,106.7C672,139,768,181,864,176C960,171,1056,117,1152,112C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>


      <div className="Getting-Started" id="Getting-Started">
        <div classname="GettingStarted-Content">
          <h2 className="GettingStarted-Title">Getting Started</h2>
          <p className="GettingStarted-Desc">Jumpstart your financial management with VaultWise in three easy steps:</p>
          <div className="Steps col-10 col-md-8 col-lg-7">
          <p><span className="StepNumber">1. </span><span className="Step-text">Download your bank statements from your banking website or application as a CSV file.</span></p>
          <p><span className="StepNumber">2. </span><span className="Step-text">Sign up to create your VaultWise account.</span></p>
          <p><span className="StepNumber">3. </span><span className="Step-text">Upload your CSV file and let our AI do the rest. Financial insights await!</span></p>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7a37ed" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,245.3C384,256,480,224,576,192C672,160,768,128,864,149.3C960,171,1056,245,1152,250.7C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

      <div className="Contact" id="Contact">
        <div className="Contact-Content">
          <h2 className="Contact-Title">Contact</h2>
          <p className="Contact-Desc">Here at VaultWise, we value every question, comment, and suggestion from our clients as it helps us shape your financial future better.</p>
          <p className="Contact-Desc">Our dedicated and friendly customer service team is ready to assist you with any inquiries you may have about our AI-powered financial management system. Whether it's about sorting your bank statements, understanding your expense pattern, or navigating through our platform, we're here to help.</p>

          <div className="Media-card col-10 col-md-8 col-lg-5">
            <p className="Contact-Desc-Bold">You can reach out to us via:</p>
            <div className="Media-Content">
              <p><span className="Contact-Media">Email: </span><span className="Email"> support@vaultwise.com </span></p>
              <p><span className="Contact-Media">Phone: </span><span className="Phone-Number"> +1 (800) 123-4567 </span></p>

              <p className="Contact-Desc-Bold">Office Hours:</p>
              <p><span className="Contact-Media">Monday-Friday, </span><span className="times">9:00 am - 5:00 pm ET</span></p>

              <p className="Contact-Desc-Bold">Headquarters:</p>
              <p className="Address">1234 Finance Street,</p>
              <p className="Address">Moneyville, ZT 56789, USA</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
