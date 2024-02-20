import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <FirstApp />
  </React.StrictMode>
);