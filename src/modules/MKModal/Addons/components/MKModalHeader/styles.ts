import { StyleSheet } from 'react-native';

import { MKThemeStyles } from 'modules/MKTheme/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    padding: MKThemeStyles.lgGap,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: MKThemeStyles.colorBrandSecondary
  },
  close: {
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
