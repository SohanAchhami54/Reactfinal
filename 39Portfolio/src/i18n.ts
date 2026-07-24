import i18n from "i18next" //translation engine.
import { initReactI18next } from "react-i18next" //connect react with i18next.

import en from "./locales/en.json" //load english dictionary.
import ne from "./locales/ne.json" //load nepali dictionary.

i18n
  .use(initReactI18next) //work together with react.
  .init({                //start translation using these settings.
    resources: {         //what languages does my app support english and nepali.
      en: {               
        translation: en,  //english languages.
      },
      ne: {               //nepali languages.
        translation: ne,
      },
    },

    lng: "en",           //start app in english.

    fallbackLng: "en",   //if nepali languages is missing then it display english languages.

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n