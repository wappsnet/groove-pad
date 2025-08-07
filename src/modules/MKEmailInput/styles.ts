import { StyleSheet } from 'react-native';
import { MKThemeStyles } from 'modules/MKTheme/styles';

export const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: MKThemeStyles.inputBorderSize,
    borderColor: MKThemeStyles.colorStrokePrimary,
    height: MKThemeStyles.inputHeight,
    fontSize: MKThemeStyles.inputFontSize
  }
});
