import React from 'react';

const Transactions = ({ transactions }) => {
  return (
    <div className="col-12 col-lg-6 mt-3">
      <div className="dash-transactions-card4 m-lg-1">
        <h2 className="dash-card-title">Transactions</h2>
        <div className="outer-container">
          <div className="table-container">
            <div className="scrollable-content">
              <table>
                <thead>
                  <tr>
                    <th className="TableTitles">Date</th>
                    <th className="TableTitles">Amount</th>
                    <th className="TableTitles">Transaction</th>
                    <th className="TableTitles">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index}>
                      <td className="TableContent">{transaction['B']}</td>
                      <td className="TableContent">
                        {(transaction['C'] < 0 ? '-$' : transaction['C'] > 0 ? '+$' : '$')}
                        {Math.abs(transaction['C']).toFixed(2)}
                      </td>
                      <td className="TableContentTransactions">{transaction['E']}</td>
                      <td className="TableContent">
                        {transaction['F'] < 0 ? '-$' : '$'}
                        {Math.abs(transaction['F']).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
