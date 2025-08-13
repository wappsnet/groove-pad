import { StyleSheet } from 'react-native';

import { MKThemeStyles } from 'modules/MKTheme/styles';

export const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 150,
    fontSize: MKThemeStyles.inputFontSize,
    borderBottomWidth: MKThemeStyles.inputBorderSize,
    borderColor: MKThemeStyles.colorStrokePrimary
  }
});
