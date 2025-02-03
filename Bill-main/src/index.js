import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainPage from './MainPage'; // MainPage import
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* Navbar should be placed here */}
    <Navbar /> 
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
