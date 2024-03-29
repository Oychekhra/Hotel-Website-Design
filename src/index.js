import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterComponent from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouterComponent />
  </BrowserRouter>
);
