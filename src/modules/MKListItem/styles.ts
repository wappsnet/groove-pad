import { StyleSheet } from 'react-native';

import theme from 'assets/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.content,
    marginBottom: 10,
    borderRadius: 5,
    padding: 5,
    ...theme.shadows.low
  }
});
