import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationZH from './locales/zh/translation.json';

const resources = {
  zh: {
    translation: translationZH,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // 默认语言设置为英文
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'], // 优先使用 localStorage，其次浏览器语言
      caches: ['localStorage'], // 缓存用户选择的语言
      lookupLocalStorage: 'i18nextLng', // localStorage 的 key
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
