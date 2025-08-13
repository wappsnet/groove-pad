import { FC } from 'react';

import { View, ViewProps } from 'react-native';

import { styles } from './styles';

interface MKColProps extends ViewProps {
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const MKCol: FC<MKColProps> = ({ style, size, children, ...props }) => (
    <View
      {...props}
      style={[
        styles.container,
        {
          width: `${(size / 12) * 100}%`
        },
        style
      ]}
    >
      {children}
    </View>
  );

export default MKCol;
