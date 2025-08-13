import { StyleSheet } from 'react-native';

import { MKThemeStyles } from 'modules/MKTheme/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrap: {
    position: 'relative',
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    paddingHorizontal: MKThemeStyles.smGap,
    height: MKThemeStyles.inputHeight,
    position: 'absolute',
    fontSize: MKThemeStyles.inputFontSize,
    textAlign: 'center',
    borderColor: MKThemeStyles.colorStrokePrimary,
    backgroundColor: 'transparent',
    borderBottomWidth: MKThemeStyles.inputBorderSize,
    top: 0,
    bottom: 0
  },
  display: {
    borderBottomWidth: MKThemeStyles.inputBorderSize,
    borderColor: MKThemeStyles.colorStrokePrimary,
    height: MKThemeStyles.inputHeight,
    paddingHorizontal: MKThemeStyles.smGap,
    marginRight: MKThemeStyles.xsMargin,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
    textAlign: 'center'
  },
  text: {
    fontSize: MKThemeStyles.inputFontSize
  },
  noBorder: {
    borderRightWidth: 0
  },
  shadows: {
    position: 'absolute',
    left: -MKThemeStyles.xsMargin,
    top: -MKThemeStyles.xsMargin,
    bottom: -MKThemeStyles.xsMargin,
    right: -MKThemeStyles.xsMargin,
    borderColor: MKThemeStyles.colorFocusPrimary,
    borderWidth: MKThemeStyles.inputBorderSize
  }
});
