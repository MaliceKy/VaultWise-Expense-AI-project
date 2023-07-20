// GettingStarted.js
import React from 'react';
import './styles/GettingStarted.css';

function GettingStarted() {
  return (
    <div className="Getting-Started" id="Getting-Started">
     <svg className="wavecard"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7a37ed" fillOpacity="1" d="M0,256L48,218.7C96,181,192,107,288,80C384,53,480,75,576,106.7C672,139,768,181,864,176C960,171,1056,117,1152,112C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <div className="GettingStarted-Content">
        <h2 className="GettingStarted-Title">Getting Started</h2>
        <p className="GettingStarted-Desc">Jumpstart your financial management with VaultWise in three easy steps:</p>
        <div className="Steps col-10 col-md-8 col-lg-7">
        <p><span className="StepNumber">1. </span><span className="Step-text">Download your bank statements from your banking website or application as a CSV file.</span></p>
        <p><span className="StepNumber">2. </span><span className="Step-text">Sign up to create your VaultWise account.</span></p>
        <p><span className="StepNumber">3. </span><span className="Step-text">Upload your CSV file and let our AI do the rest. Financial insights await!</span></p>
        </div>
      </div>
     <svg className="wavecontact"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7a37ed" fillOpacity="1" d="M0,128L48,154.7C96,181,192,235,288,245.3C384,256,480,224,576,192C672,160,768,128,864,149.3C960,171,1056,245,1152,250.7C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  );
}

export default GettingStarted;
