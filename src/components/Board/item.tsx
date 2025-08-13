import { FC } from 'react';

import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import MKIcon from 'modules/MKIcon';
import MKTypo from 'modules/MKTypo';

import { styles } from './styles';

interface PadProps extends TouchableOpacityProps {
  route: string;
  title: string;
  icon: string;
  onClick: (route: string) => void;
}

const Pad: FC<PadProps> = (props) => {
  const { route, title, icon, onClick, ...otherProps } = props;

  return (
    <TouchableOpacity
      {...otherProps}
      style={styles.padContainer}
      onPress={() => {
        onClick(route);
      }}
    >
      <MKTypo type="label">{title}</MKTypo>
      <MKIcon.Custom icon={icon} />
    </TouchableOpacity>
  );
};

export default Pad;
