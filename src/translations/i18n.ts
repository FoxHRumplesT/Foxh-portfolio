import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en';
import es from './es';

export const langs = {
  en: { flag: 'co', code: 'en', nativeName: 'English' },
  es: { flag: 'uk', code: 'es', nativeName: 'Español' }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en,
      es
    }
  });

export default i18n;