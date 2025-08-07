import { StyleSheet } from 'react-native';
import { MKThemeStyles } from 'modules/MKTheme/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: MKThemeStyles.colorContentSecondary,
    borderRadius: MKThemeStyles.xsRadius,
    ...MKThemeStyles.shadowLow
  }
});
