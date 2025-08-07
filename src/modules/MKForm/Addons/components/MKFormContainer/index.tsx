import { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { styles } from './styles';

const MKFormContainer: FC<ViewProps> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default MKFormContainer;
