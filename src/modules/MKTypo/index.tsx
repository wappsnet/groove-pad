import * as React from 'react';
import { FC } from 'react';

import { Text, TextProps } from 'react-native';

import { styles } from './styles';

interface MKTypoProps extends TextProps {
  type: 'p' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'caption';
  center?: boolean;
  bold?: boolean;
  truncate?: boolean;
}

const MKTypo: FC<MKTypoProps> = ({
  type,
  center = false,
  truncate = false,
  ellipsizeMode = 'tail',
  numberOfLines,
  bold = false,
  style,
  ...props
}) => (
    <Text
      ellipsizeMode={ellipsizeMode}
      numberOfLines={truncate ? 1 : numberOfLines}
      style={[styles[type], center && styles.center, bold && styles.bold, style]}
      {...props}
    />
  );

export default MKTypo;
