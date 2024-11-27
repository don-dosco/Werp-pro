import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { FinanceProvider } from './contexts/FinanceContext';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import Purchases from './pages/Purchases';
import Warehouse from './pages/Warehouse';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <FinanceProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/purchases" element={<Purchases />} />
              <Route path="/warehouse" element={<Warehouse />} />
            </Routes>
          </Layout>
        </Router>
      </FinanceProvider>
    </AuthProvider>
  );
};

export default App;