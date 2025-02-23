import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "header": {
        "title": "Asia Tourer"
      },
      "services": {
        "title": "What kind of tour do you want to book?",
        "groupTour": "Group Tour",
        "privateTour": "Private Tour"
      },
      "footer": {
        "contact": "Contact Us"
      }
    }
  },
  hi: {
    translation: {
      "header": {
        "title": "एशिया टूरर"
      },
      "services": {
        "title": "आप किस प्रकार का टूर बुक करना चाहते हैं?",
        "groupTour": "समूह टूर",
        "privateTour": "निजी टूर"
      },
      "footer": {
        "contact": "संपर्क करें"
      }
    }
  },
  mr: {
    translation: {
      "header": {
        "title": "आशिया टूरर"
      },
      "services": {
        "title": "आपण कोणत्या प्रकारचा टूर बुक करू इच्छिता?",
        "groupTour": "गट टूर",
        "privateTour": "खाजगी टूर"
      },
      "footer": {
        "contact": "आमच्याशी संपर्क साधा"
      }
    }
  }
};

  i18n
  .use(LanguageDetector) // Detects user's language
  .use(initReactI18next) // Passes i18n to react-i18next
  .init({
    resources,
    fallbackLng: "en", // Default language if detection fails
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;