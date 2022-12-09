import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import '../src/style/style.css';
import '../src/style/responsive.css';
import '../src/style/consultation.css'
import '../src/style/KonsultasiResponsif.css'
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
