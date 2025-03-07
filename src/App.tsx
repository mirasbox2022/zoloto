import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Address from './pages/Address';
import Contacts from './pages/Contacts';
import Services from './pages/Services';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/address" element={<Address />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <main className={`transition-all duration-300 ${isMenuOpen ? 'blur-sm' : ''}`}>
          <AnimatedRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;