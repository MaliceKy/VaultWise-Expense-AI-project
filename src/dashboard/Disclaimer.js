import React from 'react';

const Disclaimer = () => {
  return (
    <div>
      {/* Breaking into disclaimer */}
      <svg className="disclaimerwave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7a37ed" fillOpacity="1" d="M0,128L48,154.7C96,181,192,235,288,245.3C384,256,480,224,576,192C672,160,768,128,864,149.3C960,171,1056,245,1152,250.7C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

      {/* Disclaimer */}
      <div className="dash-footer">
        <h2 className="dash-disclaimer-title">Disclaimer</h2>
        <p className="Disclaimer">Disclaimer: VaultWise, developed by Kyle Malice, is a platform for importing and analyzing financial data. It is not a substitute for professional financial advice. The information provided should not be considered personalized recommendations. VaultWise does not guarantee accuracy and cannot be held liable for any losses. Users should verify results and consult financial advisors before making decisions. By using VaultWise, you agree to these terms.</p>
      </div>
    </div>
  );
};

export default Disclaimer;
