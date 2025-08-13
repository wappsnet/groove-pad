import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  field: {
    width: '100%',
  },

  prefix: {
    width: '100%',
    flexShrink: 0,
  },
  suffix: {
    width: '100%',
    flexDirection: 'column',
    flexShrink: 0,
  },
});
