import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import './styles/fonts.css';
import './styles/reset.css';

import * as eng from './locales/eng.json';
import * as kyrgyz from './locales/kyrgyz.json';
import * as rus from './locales/rus.json';

i18n.use(initReactI18next).init({
  lng: 'rus',
  resources: {
    eng: {
      translation: eng,
    },
    kyrgyz: {
      translation: kyrgyz,
    },
    rus: {
      translation: rus,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
