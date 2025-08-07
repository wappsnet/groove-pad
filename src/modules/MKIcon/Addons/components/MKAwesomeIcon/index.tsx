import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas, fab);

const MKAwesomeIcon: FC<{
  icon: IconProp;
  size?: number;
}> = ({ icon, size = 18 }) => {
  return <FontAwesomeIcon icon={icon} size={size} />;
};

export default MKAwesomeIcon;
