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
    justifyContent: 'center',
    backgroundColor: MKThemeStyles.colorBrandSecondary,
    opacity: 0.7
  }
});
