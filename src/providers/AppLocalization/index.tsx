// App.tsx
import { FC, ReactNode, useEffect, useState } from 'react';

import * as Localization from 'expo-localization';
import { IntlProvider } from 'react-intl';

interface AppLocalizationProps {
  children: ReactNode;
}

const AppLocalization: FC<AppLocalizationProps> = ({ children }) => {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    // Get the device's preferred locale
    const deviceLocale = Localization.getLocales()[0].languageCode;

    if (deviceLocale) {
      setLocale(deviceLocale);
    }
  }, []);

  return (
    <IntlProvider locale={locale} messages={{}}>
      {children}
    </IntlProvider>
  );
};

export default AppLocalization;
