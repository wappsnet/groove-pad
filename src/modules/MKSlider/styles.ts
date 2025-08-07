import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  item: {
    width: '100%',
    height: '100%'
  },
  button: {
    position: 'absolute',
    width: 30,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  prev: {
    left: 0
  },
  next: {
    right: 0
  }
});
