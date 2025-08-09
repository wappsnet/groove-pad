import { StyleSheet } from 'react-native';
import { MKThemeStyles } from '../../../../MKTheme/styles';

const TRACK_SIZE = 4;
const THUMB_SIZE = 20;

export const styles = StyleSheet.create({
  container: {
    height: THUMB_SIZE,
    justifyContent: 'center',
    position: 'relative',
  },
  track: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: TRACK_SIZE,
    borderRadius: TRACK_SIZE / 2,
    backgroundColor: MKThemeStyles.colorBrandTertiary,
  },
  thumb: {
    position: 'absolute',
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    marginLeft: -THUMB_SIZE / 2,
    borderRadius: THUMB_SIZE / 2,
    backgroundColor: MKThemeStyles.colorBrandPrimary,
  },
  touchArea: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  activeArea: {
    top: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: MKThemeStyles.colorBrandPrimary,
    borderRadius: TRACK_SIZE / 2,
    zIndex: 1,
  },
});
