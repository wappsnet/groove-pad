import { StyleSheet } from 'react-native';

import theme from 'assets/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderWidth: 3,
    borderColor: theme.colors.border,
    overflow: 'hidden'
  },
  info: {
    flex: 1,
    padding: 5,
    display: 'flex',
    flexDirection: 'column'
  }
});
