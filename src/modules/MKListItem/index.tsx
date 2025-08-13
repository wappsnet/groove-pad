import { FC } from 'react';

import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './styles';

interface MKListItemProps extends TouchableOpacityProps {
  onClick?: () => void;
}

const MKListItem: FC<MKListItemProps> = ({ children, style = {}, onClick }) => {
  if (onClick) {
    return (
      <TouchableOpacity style={[styles.container, style]} onPress={onClick}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={[styles.container, style]}>{children}</View>;
};

export default MKListItem;
