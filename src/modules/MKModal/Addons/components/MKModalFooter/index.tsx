import { FC } from 'react';

import { View, ViewProps } from 'react-native';

import { styles } from './styles';

interface MKModalFooterProps extends ViewProps {
  visible: boolean;
  showCloseButton?: boolean;
}

const MKModalFooter: FC<MKModalFooterProps> = ({ children, ...props }) => (
  <View style={styles.container} {...props}>
    {children}
  </View>
);

export default MKModalFooter;
