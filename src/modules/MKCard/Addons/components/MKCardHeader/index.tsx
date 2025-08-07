import { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { styles } from './styles';

const MKCardHeader: FC<ViewProps> = ({ style, children, ...props }) => {
  return (
    <View {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
};

export default MKCardHeader;
