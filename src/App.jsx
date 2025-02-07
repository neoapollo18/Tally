import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Materials from './pages/Materials';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/products" element={<div>Products Page</div>} />
            <Route path="/fulfillment" element={<div>Fulfillment Page</div>} />
            <Route path="/integrations" element={<div>Integrations Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;