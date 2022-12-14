import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import store from 'store';
import { Provider } from 'react-redux';

import BrowseProducts from './routes/BrowseProducts';
import SingleProduct from './routes/SingleProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='browse-products' element={<BrowseProducts />} />
            <Route path='single-product' element={<SingleProduct />} />
            <Route path='/' element={<Navigate to='browse-products' />} />
          </Route>
        </Routes>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
