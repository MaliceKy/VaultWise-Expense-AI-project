import React from 'react';
import '../styles/Dash-board.css';

const Dashboard = () => {
  return (
  <div className="Dash-Contents">
    <div className="Welcome">Welcome</div>

    <div className="dash-card-deck">
      <div className="container">
        <div className="row">
          <div className="col-9 col-md-4 mx-auto mb-4 mb-md-0">
            <div className="dash-card1 m-lg-1">
              <h2 className="dash-card-title">Upload File</h2>
              <button type="button" className="dash-Sign-in" onClick={() => document.getElementById('fileUpload').click()}>Choose File</button>
              <input 
                type="file" 
                id="fileUpload" 
                className="file-upload" 
                style={{ display: 'none' }}
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                onChange={(event) => {
                  const file = event.target.files[0];
                  console.log(file);
                }}
              />
            </div>
          </div>

          <div className="col-6 col-md-4">
            <div className="dash-card2 m-lg-1">
              <h2 className="dash-card-title">Total Income</h2>
              <p className="dash-card-text">$15,000</p>
            </div>
          </div>

          <div className="col-6 col-md-4">
            <div className="dash-card3 m-lg-1">
              <h2 className="dash-card-title">Total Outcome</h2>
              <p className="dash-card-text">$1,200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;