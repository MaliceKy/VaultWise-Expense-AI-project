import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import '../styles/Dash-board.css';

const Dashboard = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalOutcome, setTotalOutcome] = useState(0);

  const processFile = (file) => {
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = (e) => {
      let data = new Uint8Array(e.target.result);
      let workbook = XLSX.read(data, { type: 'array' });

      let firstWorksheet = workbook.Sheets[workbook.SheetNames[0]];
      let result = XLSX.utils.sheet_to_json(firstWorksheet, { header: 'A' });
      
      let income = 0;
      let outcome = 0;
      
      result.forEach((transaction) => {
        let amount = parseFloat(transaction['C']);
        if (transaction['D'] === 'Credit') income += amount;
        if (transaction['D'] === 'Debit') outcome += amount;
      });
      
      setTotalIncome(income);
      setTotalOutcome(outcome);
    };
  };

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
                    if(file) processFile(file);
                  }}
                />
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="dash-card2 m-lg-1">
                <h2 className="dash-card-title">Total Income</h2>
                <p className="dash-card-text">${totalIncome.toFixed(2)}</p>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="dash-card3 m-lg-1">
                <h2 className="dash-card-title">Total Outcome</h2>
                <p className="dash-card-text">${totalOutcome.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
