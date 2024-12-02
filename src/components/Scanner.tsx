import React, { useState } from 'react';

interface ScanResult {
  url: string;
  timestamp: Date;
  botScore: number;
  resourceWaste: number;
  trackingLevel: number;
  spamScore: number;
  totalPollutionScore: number;
  issues: string[];
}

const Scanner: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<ScanResult[]>([]);

  const analyzePage = async (targetUrl: string) => {
    setIsScanning(true);
    try {
      // In a real implementation, this would be an API call to a backend service
      // that actually crawls the webpage
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: targetUrl })
      });

      if (!response.ok) throw new Error('Scan failed');

      // Simulated scan result for now
      const newScanResult: ScanResult = {
        url: targetUrl,
        timestamp: new Date(),
        botScore: Math.random() * 100,
        resourceWaste: Math.random() * 100,
        trackingLevel: Math.random() * 100,
        spamScore: Math.random() * 100,
        totalPollutionScore: 0,
        issues: []
      };

      // Calculate total pollution score
      newScanResult.totalPollutionScore = (
        newScanResult.botScore +
        newScanResult.resourceWaste +
        newScanResult.trackingLevel +
        newScanResult.spamScore
      ) / 4;

      // Analyze issues
      if (newScanResult.botScore > 70) {
        newScanResult.issues.push('High bot activity detected');
      }
      if (newScanResult.resourceWaste > 60) {
        newScanResult.issues.push('Excessive resource usage');
      }
      if (newScanResult.trackingLevel > 80) {
        newScanResult.issues.push('Aggressive tracking scripts present');
      }
      if (newScanResult.spamScore > 50) {
        newScanResult.issues.push('Potential spam content detected');
      }

      setScanResults(prev => [newScanResult, ...prev]);
    } catch (error) {
      console.error('Scan failed:', error);
    } finally {
      setIsScanning(false);
    }
  };

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
          disabled={isScanning}
        />
        <button 
          onClick={() => analyzePage(url)}
          disabled={isScanning || !url}
        >
          {isScanning ? 'Scanning...' : 'Scan URL'}
        </button>
      </div>
      <div className="scan-results">
        <h2>Recent Scans</h2>
        {scanResults.length === 0 ? (
          <p>No scans performed yet</p>
        ) : (
          <div className="results-list">
            {scanResults.map((result, index) => (
              <div key={index} className="result-card">
                <h3>{result.url}</h3>
                <p>Scanned: {result.timestamp.toLocaleString()}</p>
                <p>Total Pollution Score: {result.totalPollutionScore.toFixed(2)}</p>
                <div className="metrics">
                  <div>Bot Activity: {result.botScore.toFixed(2)}%</div>
                  <div>Resource Waste: {result.resourceWaste.toFixed(2)}%</div>
                  <div>Tracking Level: {result.trackingLevel.toFixed(2)}%</div>
                  <div>Spam Score: {result.spamScore.toFixed(2)}%</div>
                </div>
                {result.issues.length > 0 && (
                  <div className="issues">
                    <h4>Issues Found:</h4>
                    <ul>
                      {result.issues.map((issue, i) => (
                        <li key={i}>{issue}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Scanner;
