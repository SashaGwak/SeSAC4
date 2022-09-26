import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Borad from './Board';
import Event_ex from './ex/Event_ex';
import Practice59 from './Practice59';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Event_ex />
    <Borad />
    <Practice59 />
  </>
);
