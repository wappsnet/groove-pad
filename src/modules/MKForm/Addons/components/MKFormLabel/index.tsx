import { FC, ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import { styles } from './styles';

interface MKFormLabelProps extends ViewProps {
  helpText?: ReactNode;
}

const MKFormLabel: FC<MKFormLabelProps> = ({ children, helpText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>{children}</View>
      {helpText && <View style={styles.help}>{helpText}</View>}
    </View>
  );
};

export default MKFormLabel;
