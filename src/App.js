import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/style.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ArticlePage from './pages/ArticlePage';
import ConsultationPage from './pages/ConsultationPage';
import './style/consultation.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/article' element={<ArticlePage />} />
        <Route path='/consultation' element={<ConsultationPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
