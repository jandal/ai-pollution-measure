import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  const [stats] = useState({
    totalScanned: 0,
    aiGenerated: 0,
    active: 0,
    inactive: 0,
    dormant: 0,
  });

  return (
    <div className="dashboard">
      <h1>AI Code Pollution Scanner</h1>
      
      <div className="controls">
        <button onClick={() => console.log('Scan started')}>
          Start New Scan
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Scanned</h3>
          <p>{stats.totalScanned}</p>
        </div>
        <div className="stat-card">
          <h3>AI Generated</h3>
          <p>{stats.aiGenerated}</p>
        </div>
        <div className="stat-card">
          <h3>Active Bots</h3>
          <p>{stats.active}</p>
        </div>
        <div className="stat-card">
          <h3>Inactive Bots</h3>
          <p>{stats.inactive}</p>
        </div>
        <div className="stat-card">
          <h3>Dormant Bots</h3>
          <p>{stats.dormant}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;