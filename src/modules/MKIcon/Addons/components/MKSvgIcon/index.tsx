import { FC } from "react";

import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

library.add(fas, fab);

const MKSvgIcon: FC<{
  icon: IconProp;
  size?: number;
}> = ({ icon, size = 18 }) => <FontAwesomeIcon icon={icon} size={size} />;

export default MKSvgIcon;
