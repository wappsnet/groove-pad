import { FC } from 'react';

import { View, ViewProps } from 'react-native';

import { styles } from './styles';

const MKCardBody: FC<ViewProps> = ({ style, children, ...props }) => (
    <View {...props} style={[styles.container, style]}>
      {children}
    </View>
  );

export default MKCardBody;
