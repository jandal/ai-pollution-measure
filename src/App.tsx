import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Scanner from './components/Scanner';
import Analytics from './components/Analytics';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;