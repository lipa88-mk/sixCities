import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Settings = {
  OFFERS: 5
};

root.render(
  <React.StrictMode>
    <App offersCount={Settings.OFFERS} />
  </React.StrictMode>,
);
