import { FC } from 'react';

import { View, TouchableOpacity, ViewProps } from 'react-native';

import { styles } from './styles';

interface MKModalHeader extends ViewProps {
  visible: boolean;
  showCloseButton?: boolean;
  close: () => void;
}

const MKModalHeader: FC<MKModalHeader> = ({ children, close, ...props }) => (
  <View style={styles.container} {...props}>
    <View style={styles.content}>{children}</View>
    <TouchableOpacity style={styles.close} onPress={close} />
  </View>
);

export default MKModalHeader;
