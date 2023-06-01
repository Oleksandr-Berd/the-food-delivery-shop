import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-virtualized/styles.css";

import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
 import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { theme } from './Utilities/theme';
import ProductsCartProvider from './context/porductsCartProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsCartProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ProductsCartProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
