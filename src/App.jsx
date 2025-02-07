import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarProvider } from './frontend/context/SidebarContext';
import Sidebar from './frontend/components/Sidebar';
import Materials from './frontend/pages/Materials';

function App() {
  return (
    <Router>
      <SidebarProvider>
        <div className="flex min-h-screen bg-gray-100">
          <Sidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<div>Home Page</div>} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/products" element={<div>Products Page</div>} />
              <Route path="/fulfillment" element={<div>Fulfillment Page</div>} />
              <Route path="/integrations" element={<div>Integrations Page</div>} />
            </Routes>
          </main>
        </div>
      </SidebarProvider>
    </Router>
  );
}

export default App;