import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/style.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ArticlePage from './pages/ArticlePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/article' element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
