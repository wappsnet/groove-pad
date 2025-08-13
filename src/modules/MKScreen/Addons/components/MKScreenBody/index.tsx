import { FC } from 'react';

import { View, ViewProps } from 'react-native';

import { styles } from './styles';

const MKScreenBody: FC<ViewProps> = ({ children, ...otherProps }) => (
    <View style={styles.container} {...otherProps}>
      {children}
    </View>
  );

export default MKScreenBody;
