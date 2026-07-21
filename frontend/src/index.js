import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Adjust or remove if you're not using this file
import App from './App';
import reportWebVitals from './reportWebVitals'; // Remove if you're not using web vitals

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you're not using reportWebVitals, you can remove this part
reportWebVitals();
