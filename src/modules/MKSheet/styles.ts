import { StyleSheet } from 'react-native';
import { MKThemeStyles } from '../MKTheme/styles';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    borderTopLeftRadius: MKThemeStyles.mdRadius,
    borderTopRightRadius: MKThemeStyles.mdRadius,
    backgroundColor: MKThemeStyles.colorTextPrimary
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1
  },
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  grabber: {
    width: '100%',
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  grabberHandle: {
    width: '30%',
    height: 10,
    backgroundColor: MKThemeStyles.colorBrandSecondary,
    borderRadius: MKThemeStyles.smRadius
  },
  content: {
    width: '100%',
    height: '100%',
    flex: 1,
    padding: MKThemeStyles.smGap
  }
});
