import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import frTranslation from './locales/fr.json';
import enTranslation from './locales/en.json';

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    resources: {
      fr: {
        translation: frTranslation
      },
      en: {
        translation: enTranslation
      }
    },
    fallbackLng: 'fr',
    
    // allow keys to be phrases having `:`, `.`
    nsSeparator: false,
    keySeparator: '.',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;
