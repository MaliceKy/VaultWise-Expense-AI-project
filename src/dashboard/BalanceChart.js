import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BalanceChart = ({ chartData }) => {
  return (
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
              <Tooltip 
                formatter={(value) => {
                  const isNegative = value < 0;
                  const formattedValue = Math.abs(value).toLocaleString('en-US', { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  });
                  const sign = isNegative ? "-$" : "$";
                  return [`Balance: ${sign}${formattedValue}`];
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default BalanceChart;
