import React from 'react';
import ReactDOM from 'react-dom/client';
import Effect from './1HooksEffect';
import Reducer from './2HooksReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Effect />
    <Reducer />
  </>
);
