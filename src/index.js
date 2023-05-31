import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";
import { theme } from './Utilities/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
