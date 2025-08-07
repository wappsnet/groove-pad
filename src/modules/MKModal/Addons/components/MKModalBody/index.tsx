import { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { styles } from './styles';

interface MKModalBodyProps extends ViewProps {
  visible: boolean;
  showCloseButton?: boolean;
  close: () => void;
}

const MKModalBody: FC<MKModalBodyProps> = ({ children, close, showCloseButton, ...props }) => (
  <View style={styles.container} {...props}>
    {children}
  </View>
);

export default MKModalBody;
