import { StyleSheet } from 'react-native';
import { MKThemeStyles } from 'modules/MKTheme/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    position: 'relative',
    zIndex: 1
  },
  headerWrapper: {
    width: '100%'
  },
  footer: {
    width: '100%',
    backgroundColor: 'transparent',
    zIndex: 1
  },
  footerWrapper: {
    backgroundColor: 'transparent'
  },
  content: {
    flexGrow: 1,
    width: '100%',
    height: 'auto',
    paddingHorizontal: MKThemeStyles.xsGap,
    flexDirection: 'column'
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    paddingHorizontal: MKThemeStyles.xsGap
  }
});
