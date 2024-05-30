import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Settings = {
  OFFERS: 5,
  LOCATIONS_LIST: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
};

root.render(
  <React.StrictMode>
    <App offersCount={Settings.OFFERS} locationsList={Settings.LOCATIONS_LIST} />
  </React.StrictMode>,
);
