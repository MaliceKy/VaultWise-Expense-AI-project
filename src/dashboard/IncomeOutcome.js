// IncomeOutcome.js
import React from 'react';

const IncomeOutcome = ({ totalIncome, totalOutcome }) => {
  return (
    <>
      <div className="col-6 col-md-4">
        <div className="dash-card2 m-lg-1">
          <h2 className="dash-card-title">Total Income</h2>
          <p className="dash-card-text">${totalIncome.toFixed(2)}</p>
        </div>
      </div>

      <div className="col-6 col-md-4">
        <div className="dash-card3 m-lg-1">
          <h2 className="dash-card-title">Total Expense</h2>
          <p className="dash-card-text">
            {totalOutcome < 0 ? '-$' : '$'}
            {Math.abs(totalOutcome).toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
};

export default IncomeOutcome;

