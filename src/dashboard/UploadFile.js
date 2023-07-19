import React from 'react';

const UploadFile = ({ processFile }) => {
  return (
    <div className="col-9 col-md-4 mx-auto mb-4 mb-md-0">
      <div className="dash-card1 m-lg-1">
        <h2 className="dash-card-title">Upload File</h2>
        <button type="button" className="dash-upload" onClick={() => document.getElementById('fileUpload').click()}>Choose File</button>
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
  );
};

export default UploadFile;