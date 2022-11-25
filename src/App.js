import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style/style.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ArticlePage from './pages/ArticlePage';
import MentalTestHomePage from './pages/MentalTestHomePage';
import MentalTestPage from './pages/MentalTestPage';
import MentalTestResultPage from './pages/MentalTestResultPage';
import { AuthContextProvider } from './config/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/mentaltest" element={<MentalTestHomePage />} />
        <Route path="/mentaltest/start" element={<MentalTestPage />} />
        <Route path="/mentaltest/result" element={<MentalTestResultPage />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
