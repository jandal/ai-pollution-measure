import React, { useState } from 'react';

const Scanner: React.FC = () => {
  const [url, setUrl] = useState('');

  return (
    <div className="scanner-section">
      <h1>Web Scanner</h1>
      <div className="scanner-controls">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to scan"
          className="url-input"
        />
        <button onClick={() => console.log('Scanning:', url)}>
          Scan URL
        </button>
      </div>
      <div className="scan-results">
        <h2>Recent Scans</h2>
        <p>No scans performed yet</p>
      </div>
    </div>
  );
};

export default Scanner;