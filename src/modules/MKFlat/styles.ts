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
    marginBottom: 10,
    position: 'relative',
    background: 'transparent',
    paddingHorizontal: MKThemeStyles.smGap,
    zIndex: 1
  },
  headerWrapper: {
    ...MKThemeStyles.shadowAlpha
  },
  footer: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: MKThemeStyles.smGap,
    zIndex: 1
  },
  footerWrapper: {
    backgroundColor: 'transparent'
  },
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatList: {
    width: '100%'
  },
  flatListItem: {
    paddingHorizontal: MKThemeStyles.smGap
  },
  sectionHeader: {
    paddingHorizontal: MKThemeStyles.smGap
  }
});
