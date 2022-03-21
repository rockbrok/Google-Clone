import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import './index.css';
import App from './App';

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'es'],
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ['cookie', 'htmlTag', 'path'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  });

ReactDOM.render(
  <Suspense fallback>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,

  document.getElementById('root')
);