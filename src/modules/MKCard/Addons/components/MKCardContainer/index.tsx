import { FC } from 'react';

import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface MKCardContainerProps extends TouchableOpacityProps {
  onClick: () => void;
}

const MKCardContainer: FC<MKCardContainerProps> = ({ style, children, onClick, ...props }) => (
    <TouchableOpacity {...props} style={[styles.container, style]} onPress={onClick}>
      {children}
    </TouchableOpacity>
  );

export default MKCardContainer;
