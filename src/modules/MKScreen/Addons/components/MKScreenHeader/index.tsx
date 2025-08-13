import { FC } from 'react';

import { View, ViewProps } from 'react-native';

import { styles } from './styles';

const MKScreenHeaderProps: FC<ViewProps> = ({ children, ...otherProps }) => (
    <View style={styles.container} {...otherProps}>
      {children}
    </View>
  );

export default MKScreenHeaderProps;
