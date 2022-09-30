import React from 'react';
import ReactDOM from 'react-dom/client';
import Effect from './1HooksEffect';
import Reducer from './2HooksReducer';
import Memo from './3HookMemo';
import Origin from './4Origin';
import UseSass from './5UseSacc';
import CSSModule from './6CSSModule';
import StyledComponent from './7StyledComponent';
import Worm from './larva';
import Animation from './Animation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Animation />
    <Worm />
    <hr />
    <Effect />
    <Reducer />
    <Memo />
    <Origin />
    <hr />
    <UseSass />
    <hr />
    <CSSModule />
    <StyledComponent />
  </>
);
