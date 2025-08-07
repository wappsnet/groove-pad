import { StyleSheet } from 'react-native';
import { MKThemeStyles } from 'modules/MKTheme/styles';

export const styles = StyleSheet.create({
  keyboard: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: MKThemeStyles.colorBrandPrimary
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: MKThemeStyles.colorBrandSecondary
  }
});
