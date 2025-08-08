import { StyleSheet } from 'react-native';
import { MKThemeStyles } from 'modules/MKTheme/styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: MKThemeStyles.smGap,
    paddingTop: MKThemeStyles.xxlGap,
    paddingBottom: MKThemeStyles.smGap,
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
