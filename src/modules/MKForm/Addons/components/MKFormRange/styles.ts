import { StyleSheet } from 'react-native';

import { MKThemeStyles } from 'modules/MKTheme/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    height: 40,
  },
  pressable: {
    width: '100%',
    position: 'absolute',
    height: 20,
    top: -10,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  track: {
    height: 4,
    backgroundColor: MKThemeStyles.colorStrokePrimary,
    borderRadius: 2,
  },
  activeTrack: {
    position: 'absolute',
    height: 4,
    backgroundColor: MKThemeStyles.colorBrandPrimary,
    borderRadius: 2,
  },
  thumbContainer: {
    position: 'absolute',
    width: 1,
    height: 1,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumb: {
    position: 'relative',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: MKThemeStyles.colorContentSecondary,
    borderWidth: 1,
    borderColor: MKThemeStyles.colorBrandPrimary,
  },
});
