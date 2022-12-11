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
import ConsultationPage from './pages/ConsultationPage';
import Support from './pages/Support';
import DetailPage from './pages/DetailPage';

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
        <Route path="/konsultasi" element={<ConsultationPage />} />
        <Route path="/support" element={<Support/>} />
        <Route path="/detailpesanan" element={<DetailPage/>} />
      </Routes>
    </AuthContextProvider>

  );
}

export default App;
