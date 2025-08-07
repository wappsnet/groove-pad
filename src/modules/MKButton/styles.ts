import { StyleSheet } from 'react-native';
import { MKThemeStyles } from 'modules/MKTheme/styles';

export const styles = StyleSheet.create({
  default: {
    maxWidth: '100%',
    position: 'relative',
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: MKThemeStyles.lgRadius,
    paddingVertical: MKThemeStyles.smGap,
    paddingHorizontal: MKThemeStyles.mdGap,
    opacity: 1,
    fontSize: MKThemeStyles.labelFontSize,
    ...MKThemeStyles.shadowAlpha
  },
  primary: {
    backgroundColor: MKThemeStyles.colorBrandPrimary,
    color: MKThemeStyles.colorTextPrimary
  },
  secondary: {
    backgroundColor: MKThemeStyles.colorBrandSecondary,
    color: MKThemeStyles.colorTextPrimary
  },
  tertiary: {
    backgroundColor: MKThemeStyles.colorContentSecondary,
    color: MKThemeStyles.colorTextPrimary,
    borderRadius: MKThemeStyles.xsRadius
  },
  danger: {
    backgroundColor: MKThemeStyles.colorInfoDanger,
    color: MKThemeStyles.colorTextPrimary
  },
  success: {
    backgroundColor: MKThemeStyles.colorInfoSuccess,
    color: MKThemeStyles.colorTextPrimary
  },
  light: {
    backgroundColor: MKThemeStyles.colorContentSecondary,
    color: MKThemeStyles.colorTextSecondary
  },
  startIcon: {
    marginRight: MKThemeStyles.smMargin,
    fontSize: MKThemeStyles.iconFontSize
  },
  endIcon: {
    marginLeft: MKThemeStyles.smMargin,
    fontSize: MKThemeStyles.iconFontSize
  }
});
