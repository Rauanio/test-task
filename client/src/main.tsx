import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.tsx';
import { StoreProvider } from '@app/storeProvider/index.ts';
import { Toaster } from 'react-hot-toast';
import '@app/styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Toaster />
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
