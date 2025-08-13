import {StyleSheet} from "react-native";

import theme from 'assets/theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    ...theme.shadows.low,
  },
  icon: {
    width: '65%',
    aspectRatio: 1,
    color: theme.colors.secondary,
  },
});
