import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter}  from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Header from './project/header.js';
import Footer from './project/footer.js';
import { AuthContextProvider } from './context/authContext';
import { SearchContextProvider } from './context/searchContext';
import { Toaster } from 'react-hot-toast';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<AuthContextProvider>
  <SearchContextProvider>
    <Header/>
    <Toaster/>
    <App />
    <Footer/>
    </SearchContextProvider>
  </AuthContextProvider>
</BrowserRouter>
);
reportWebVitals();
