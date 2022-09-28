import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LifeCycle from './lifecycle';
import Ref from './Ref';
import ScrollBox from './ScrollBox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ScrollBox />
    <App />
    <Ref />
    <Ref />
    <LifeCycle />
  </>
);
