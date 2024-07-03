import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';

import { Provider } from 'react-redux';
import store from './app/store';
import { twMerge } from 'tailwind-merge';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimeReactProvider
        value={{
          unstyled: true,
          pt: Tailwind,
          ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge },
        }}
      >
        <App />
      </PrimeReactProvider>
    </Provider>
  </React.StrictMode>,
);
