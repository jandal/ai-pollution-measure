import React from 'react';

const Analytics: React.FC = () => {
  return (
    <div className="analytics-section">
      <h1>Analytics Dashboard</h1>
      <div className="analytics-grid">
        <div className="stat-card">
          <h3>Total Detection Rate</h3>
          <p>0%</p>
        </div>
        <div className="stat-card">
          <h3>Most Common Bot Types</h3>
          <p>No data available</p>
        </div>
        <div className="stat-card">
          <h3>Activity Trends</h3>
          <p>No trends detected</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;