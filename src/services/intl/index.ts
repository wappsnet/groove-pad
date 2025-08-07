import I18n from 'i18n-js';
import Assets from 'definitions/assets';
import { LanguagesEnum } from 'store/slices/configs/types';
import enTranslations from './lang/en';

const init = () => {
  I18n.defaultLocale = LanguagesEnum.En;
  I18n.translations = {
    [LanguagesEnum.En]: enTranslations
  };
  return {
    locale: I18n.locale,
    languages: {
      [LanguagesEnum.En]: {
        key: LanguagesEnum.En,
        messages: I18n.translations[LanguagesEnum.En],
        image: Assets.languages.enIcon
      }
    },
    translations: I18n.translations,
    setLanguage: (lang: LanguagesEnum) => {
      I18n.fallbacks = true;
      I18n.locale = lang || LanguagesEnum.En;
    },
    t: I18n.t
  };
};

const Intl = init();

export default Intl;
