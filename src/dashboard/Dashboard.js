import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import '../styles/Dash-board.css';

// Import the new components
import UploadFile from './UploadFile.js';
import IncomeOutcome from './IncomeOutcome.js';
import Transactions from './Transactions.js';
import BalanceChart from './BalanceChart.js';
import Chat from './Chat.js';
import Disclaimer from './Disclaimer.js';

// Dashboard Component
const Dashboard = () => {

  // Initial State
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalOutcome, setTotalOutcome] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am ChatGPT",
      sender: "ChatGPT"
    }
  ]);

  // Function to process uploaded file
  const processFile = (file) => {
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);

    // On file load
    reader.onload = (e) => {
      let data = new Uint8Array(e.target.result);
      let workbook = XLSX.read(data, { type: 'array' });

      let firstWorksheet = workbook.Sheets[workbook.SheetNames[0]];
      let result = XLSX.utils.sheet_to_json(firstWorksheet, { header: 'A' });
      
      let income = 0;
      let outcome = 0;
      let chartDataTemp = [];

      let transactionData = result.slice(1); // Skipping the first row which are headers

      // Process transaction data
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

      // Set State
      setTransactions(transactionData);
      setTotalIncome(income);
      setTotalOutcome(outcome);
      setChartData(chartDataTemp);
    };
  };

  // Render
  return (
    <div className="Dash-Contents">
      <div className="Welcome">Welcome</div>
      <div className="dash-card-deck">
        <div className="container">
          <div className="row">

            {/* File upload */ }
            <UploadFile processFile={processFile} />

            {/* Total income and outcome */ }
            <IncomeOutcome totalIncome={totalIncome} totalOutcome={totalOutcome} />

            {/* Transactions */ }
            <Transactions transactions={transactions} />

            {/* Graph */ }
            <BalanceChart chartData={chartData} />

            {/* AI */ }
            <Chat messages={messages} setMessages={setMessages} />

          </div>
        </div>
          {/* Disclaimer */ }
          <Disclaimer />
      </div>
    </div>
  );
};

export default Dashboard;
