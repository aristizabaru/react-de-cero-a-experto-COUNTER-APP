import React from 'react';
import ReactDOM from 'react-dom/client';
import { Counter } from './Counter';
import './styles.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    {/* <FirstApp title='Bienvenido a REACT' subTitle='De cero a experto' /> */}
    <Counter value={20} />
  </React.StrictMode>
);