import { StyleSheet } from 'react-native';
import theme from 'assets/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: theme.form.field.height,
    borderColor: theme.form.field.borderColor,
    borderWidth: theme.form.field.borderWidth,
    borderRadius: theme.form.field.borderRadius,
    padding: theme.form.field.padding
  },
  label: {
    width: 'auto',
    fontSize: theme.form.field.fontSizeLarge,
    color: theme.form.field.labelColor,
    marginRight: 10
  }
});
