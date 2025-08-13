import { StyleSheet } from 'react-native';

import { MKThemeStyles } from 'modules/MKTheme/styles';

export const styles = StyleSheet.create({
  p: {
    fontSize: MKThemeStyles.paragraphFontSize,
    lineHeight: MKThemeStyles.typoLinHeight
  },
  caption: {
    fontSize: MKThemeStyles.captionFontSize,
    lineHeight: MKThemeStyles.typoLinHeight
  },
  label: {
    fontSize: MKThemeStyles.labelFontSize,
    lineHeight: MKThemeStyles.typoLinHeight
  },
  h1: {
    fontSize: MKThemeStyles.h1FontSize,
    lineHeight: MKThemeStyles.typoLinHeight
  },
  h2: {
    fontSize: MKThemeStyles.h2FontSize,
    lineHeight: MKThemeStyles.typoLinHeight
  },
  h3: {
    fontSize: MKThemeStyles.h3FontSize,
    lineHeight: MKThemeStyles.typoLinHeight
  },
  h4: {
    fontSize: MKThemeStyles.h4FontSize,
    lineHeight: MKThemeStyles.typoLinHeight
  },
  h5: {
    fontSize: MKThemeStyles.h5FontSize,
    lineHeight: MKThemeStyles.typoLinHeight
  },
  h6: {
    fontSize: MKThemeStyles.h6FontSize,
    lineHeight: MKThemeStyles.typoLinHeight
  },
  center: {
    textAlign: 'center'
  },
  bold: {
    fontWeight: 'bold'
  }
});
