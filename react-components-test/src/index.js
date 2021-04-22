import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './helpers/globalStyles';
import IconsStorage from './helpers/iconsStorage';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <IconsStorage />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
