import { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { styles } from './styles';

const MKScreenFooter: FC<ViewProps> = ({ children, ...otherProps }) => {
  return (
    <View style={styles.container} {...otherProps}>
      {children}
    </View>
  );
};

export default MKScreenFooter;
