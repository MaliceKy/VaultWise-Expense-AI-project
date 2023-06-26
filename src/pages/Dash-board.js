import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Date } from 'core-js';
import '../styles/Dash-board.css';

const Dashboard = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalOutcome, setTotalOutcome] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [chartData, setChartData] = useState([]);

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
      let chartDataTemp = [];

      // Skipping the first row which are headers
      let transactionData = result.slice(1);

      transactionData.forEach((transaction) => {
        let amount = parseFloat(transaction['C']);
        if (transaction['D'] === 'Credit') income += amount;
        if (transaction['D'] === 'Debit') outcome += amount;

        // Convert Excel serial number to date
        let date = new Date((transaction['B'] - (25567 + 1))*86400*1000);
        transaction['B'] = date.toLocaleDateString();

        // Prepare chart data
        chartDataTemp.push({
          date: transaction['B'],
          balance: parseFloat(transaction['F'])
        });
      });

      // Sort chart data by date
      chartDataTemp.sort((a, b) => new Date(a.date) - new Date(b.date));

      setTransactions(transactionData);
      setTotalIncome(income);
      setTotalOutcome(outcome);
      setChartData(chartDataTemp);
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
          </div>

          <div className="row">
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

            <div className="col-12 col-lg-6 mt-3">
              <div className="dash-Chart-card5 m-lg-1">
                <h2 className="dash-card-title">Graph</h2>
                <div className="Dash-Chart-Title-Con">
                  <p className="ChartTitle">Least to Most Recent, Account Balance</p>
                </div>
                {chartData.length > 0 && (
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart 
                      data={chartData}
                      margin={{ top: 25, right: 20, bottom: 20, left: 0 }}
                    >
                      <Line type="monotone" dataKey="balance" stroke="#8884d8" />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="dash-Chart-card5 m-lg-1">
                <h2 className="dash-card-title">Ai</h2>
                <div className="Dash-Chart-Title-Con">
                  <p className="ChartTitle">Your Personal Finacial Assistant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7a37ed" fillOpacity="1" d="M0,128L48,154.7C96,181,192,235,288,245.3C384,256,480,224,576,192C672,160,768,128,864,149.3C960,171,1056,245,1152,250.7C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className="dash-footer">
        <p>Disclaimer: VaultWise is an online platform developed by Kyle Malice, a Computer Science sophomore college student. The purpose of VaultWise is to provide users with a convenient tool to import and analyze their financial data, including calculating income, expenses, graphing bank account balances, and engaging in conversations with a trained AI for guidance on financial goals. However, it is important to note that VaultWise is not intended to be a substitute for professional financial advice.

The information provided on VaultWise should not be considered as personalized financial advice or recommendations. The calculations, analysis, and suggestions generated by VaultWise are based on algorithms and general financial principles, but they may not be suitable for every individual's unique financial situation. Users are advised to exercise caution and use their own discretion before making any financial decisions based on the information provided by VaultWise.

VaultWise does not guarantee the accuracy, completeness, or reliability of the financial calculations and analyses generated by the platform. While efforts are made to ensure the accuracy of the data and calculations, VaultWise cannot be held responsible for any errors, omissions, or inaccuracies in the information provided. Users are responsible for verifying the results and cross-referencing them with their own financial records.

Furthermore, VaultWise does not assume any liability for any financial losses, damages, or adverse outcomes resulting from the use of the platform. Users are solely responsible for their financial decisions and should consult with a qualified financial advisor or professional before making any significant financial commitments or investments.

By accessing and using VaultWise, you acknowledge and agree that Kyle Malice, the developer of VaultWise, and any affiliated parties shall not be held liable for any direct or indirect damages or losses arising from the use of the platform. Users utilize VaultWise at their own risk and are solely responsible for any consequences that may arise.

Please note that the laws and regulations governing financial advice and services may vary by jurisdiction. It is the user's responsibility to comply with the applicable laws and regulations of their respective jurisdictions.

By using VaultWise, you indicate your acceptance and understanding of this disclaimer. If you do not agree with any part of this disclaimer, please refrain from using VaultWise.</p>
      </div>
    </div>
  );
};

export default Dashboard;


