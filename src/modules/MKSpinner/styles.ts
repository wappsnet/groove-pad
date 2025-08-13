import { StyleSheet } from 'react-native';

import { MKThemeStyles } from '../MKTheme/styles';

export const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    color: MKThemeStyles.colorStrokePrimary,
    zIndex: 9
  }
});
