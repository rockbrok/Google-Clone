import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translationEN.json';
import translationES from './locales/es/translationES.json';

const resources = {
    en: {
        translation: translationEN
    },
    es: {
        translation: translationES
    }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
      resources,
      supportedLngs: ['en', 'es'],
      fallbackLng: 'en',

      keySeperator: false,

      interpolation: {
          escapeValue: false
      },

      detection: {
          order: ['cookie', 'localStorage'],
          caches: ['cookie'],
      },
  });

  export default i18n;