import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/style.css';
import '../src/style/responsive.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
