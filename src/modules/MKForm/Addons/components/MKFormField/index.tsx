import { FC, ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import { styles } from './styles';

interface MKFormFieldProps extends ViewProps {
  label?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

const MKFormField: FC<MKFormFieldProps> = ({ children, prefix, suffix }) => {
  return (
    <View style={styles.container}>
      {prefix && <View style={styles.prefix}>{prefix}</View>}
      <View style={styles.field}>{children}</View>
      {suffix && <View style={styles.suffix}>{prefix}</View>}
    </View>
  );
};

export default MKFormField;
