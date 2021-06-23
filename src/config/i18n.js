import i18n from "i18next";
import localesResourse from "./locales";
import DeviceInfo from "react-native-device-info";
import {  reactI18nextModule} from "react-i18next"
// const languageDetector = {
//   type: "languageDetector",
//   detect: () => DeviceInfo.,
//   init: () => {},
//   cacheUserLanguage: () => {}
// };

i18n
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'vi',
    lng: 'vi',
    resources:localesResourse,
    ns: ['translation'],
    defaultNS: 'translation',
    react:{
      useSuspense:false,
    }
    
  });

export default i18n;