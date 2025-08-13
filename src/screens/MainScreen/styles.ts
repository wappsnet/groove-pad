import { StyleSheet } from 'react-native';

import theme from 'assets/theme';

import { vh } from 'helpers/viewport';

import { MKThemeStyles } from 'modules/MKTheme/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
  },
  menu: {
    width: '100%',
    flex: 1,
    position: 'relative',
  },
  menuIcon: {
    width: '100%',
    height: 25,
    color: theme.colors.primary,
    marginVertical: MKThemeStyles.smGap,
  },
  indicator: {
    marginVertical: 50,
    color: theme.colors.indicator,
  },
  slider: {
    width: '100%',
    height: vh(40),
  },
  sliderItem: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderWidth: 1,
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    position: 'relative',
    resizeMode: 'center',
    borderWidth: 1,
  },
});
