import { FC } from 'react';

import { View, ViewProps } from 'react-native';

import { styles } from './styles';

interface MKFormGroupProps extends ViewProps {
  direction?: 'row' | 'column';
}

const MKFormGroup: FC<MKFormGroupProps> = ({ children, direction = 'column' }) => <View style={styles[direction]}>{children}</View>;

export default MKFormGroup;
