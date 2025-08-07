import React from 'react';
import { Provider } from 'react-redux';
import { useAppTheme } from 'hooks/useAppTheme';
import AppNavigation from 'containers/AppNavigation';
import store from 'store';

const App = () => {
  const theme = useAppTheme();
  return (
    <Provider store={store}>
      <AppNavigation theme={theme} />
    </Provider>
  );
};

export default App;
