import React from 'react';

import { Provider } from 'react-redux';

import store from 'store';

import AppNavigation from 'providers/AppNavigation';

import { useAppTheme } from 'hooks/useAppTheme';

import AppLocalization from './src/providers/AppLocalization';

const App = () => {
  const theme = useAppTheme();
  return (
    <Provider store={store}>
      <AppLocalization>
        <AppNavigation theme={theme} />
      </AppLocalization>
    </Provider>
  );
};

export default App;
