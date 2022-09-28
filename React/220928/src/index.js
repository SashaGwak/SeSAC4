import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Ref from './Ref';
import ScrollBox from './ScrollBox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScrollBox />
    <App />
    <Ref />
    <Ref />
  </React.StrictMode>
);
