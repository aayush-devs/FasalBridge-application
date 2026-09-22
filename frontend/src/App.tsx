import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Landing } from './pages/Landing';
import { FarmerDashboard } from './pages/FarmerDashboard';
import { ProduceForm } from './pages/ProduceForm';
import { Marketplace } from './pages/Marketplace';
import { OrderPage } from './pages/OrderPage';
import { Logistics } from './pages/Logistics';
import { Analytics } from './pages/Analytics';
import { Demo } from './pages/Demo';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <div className="app-main-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/farmer" element={<FarmerDashboard />} />
            <Route path="/farmer/list-produce" element={<ProduceForm />} />
            <Route path="/farmer/forecast" element={<FarmerDashboard />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
