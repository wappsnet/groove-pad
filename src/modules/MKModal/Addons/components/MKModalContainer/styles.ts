import { StyleSheet } from 'react-native';

import { MKThemeStyles } from 'modules/MKTheme/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    padding: MKThemeStyles.lgGap,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MKThemeStyles.colorBrandSecondary,
    opacity: 0.7
  },
  overLay: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    position: 'absolute',
    borderWidth: 1,
    elevation: 1
  },
  content: {
    width: '100%',
    height: 'auto',
    maxWidth: 400,
    flexDirection: 'column',
    backgroundColor: MKThemeStyles.colorContentSecondary,
    borderRadius: MKThemeStyles.smGap,
    overflow: 'hidden',
    ...MKThemeStyles.shadowAlpha
  }
});
