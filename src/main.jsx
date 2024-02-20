import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import './styles.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <FirstApp title='Bienvenido a REACT' subTitle='De cero a experto' />
  </React.StrictMode>
);