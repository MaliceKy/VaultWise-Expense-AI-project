// Dashboard.js
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import '../styles/Dash-board.css';
import UploadFile from './UploadFile.js';
import IncomeOutcome from './IncomeOutcome.js';
import Transactions from './Transactions.js';
import BalanceChart from './BalanceChart.js';
import Chat from './Chat.js';
import Disclaimer from './Disclaimer.js';

const Dashboard = () => {
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
  const [finalBalance, setFinalBalance] = useState(0);

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

      let transactionData = result.slice(1);

      transactionData.forEach((transaction) => {
        let amount = parseFloat(transaction['C']);
        let description = transaction['E'];
        if (transaction['D'] === 'Credit') income += amount;
        if (transaction['D'] === 'Debit') outcome += amount;

        let date = new Date((transaction['B'] - (25567 + 1))*86400*1000);
        transaction['B'] = date.toLocaleDateString();

        chartDataTemp.push({
          date: transaction['B'],
          balance: parseFloat(transaction['F']),
          description: description
        });

        setTransactions(transactionData.map(transaction => ({
          date: transaction['B'],
          amount: parseFloat(transaction['C']),
          type: transaction['D'],
          description: transaction['E'],
          balance: parseFloat(transaction['F'])
        })));
      });

      chartDataTemp.sort((a, b) => new Date(a.date) - new Date(b.date));

      setTotalIncome(income);
      setTotalOutcome(outcome);
      setChartData(chartDataTemp);
      setFinalBalance(chartDataTemp[chartDataTemp.length - 1].balance);
    };
  };

  return (
    <div className="Dash-Contents">
      <div className="Welcome">Welcome</div>
      <div className="dash-card-deck">
        <div className="container">
          <div className="row">
            <UploadFile processFile={processFile} />
            <IncomeOutcome totalIncome={totalIncome} totalOutcome={totalOutcome} />
            <Transactions transactions={transactions} />
            <BalanceChart chartData={chartData} />
            <Chat messages={messages} setMessages={setMessages} transactions={transactions} finalBalance={finalBalance} />
          </div>
        </div>
        <Disclaimer />
      </div>
    </div>
  );
};

export default Dashboard;