import { FC, ReactNode } from 'react';

import { View, ViewProps } from 'react-native';

import { styles } from './styles';

interface MKFormFieldProps extends ViewProps {
  prefix?: ReactNode;
  suffix?: ReactNode;
}

const MKFormField: FC<MKFormFieldProps> = ({ children, prefix, suffix }) => (
  <View style={styles.container}>
    {prefix && <View style={styles.prefix}>{prefix}</View>}
    <View style={styles.field}>{children}</View>
    {suffix && <View style={styles.suffix}>{prefix}</View>}
  </View>
);

export default MKFormField;
