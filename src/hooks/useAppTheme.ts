import { useColorScheme as _useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';

// The theme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export const useAppTheme = (): Theme => {
  const scheme = _useColorScheme();

  if (scheme === 'dark') {
    return DarkTheme;
  }

  return DefaultTheme;
};
