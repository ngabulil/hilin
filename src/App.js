import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ArticlePage from './pages/ArticlePage';
import MentalTestHomePage from './pages/MentalTestHomePage';
import MentalTestPage from './pages/MentalTestPage';
import MentalTestSummaryPage from './pages/MentalTestSummaryPage';
import './style/style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/mentaltest" element={<MentalTestHomePage />} />
        <Route path="/mentaltest/start" element={<MentalTestPage />} />
        <Route path="/mentaltest/summary" element={<MentalTestSummaryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
