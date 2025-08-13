import { FC } from 'react';

import { ViewProps } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { MKThemeStyles } from 'modules/MKTheme/styles';

interface MKCustomIconProps extends ViewProps {
  icon: string;
}

const MKCustomIcon: FC<MKCustomIconProps> = ({ icon, hitSlop, ...props }) => {
  let xmlIcon = icon;

  xmlIcon = xmlIcon.replace(/colors.fill/g, MKThemeStyles.colorTextSecondary);
  xmlIcon = xmlIcon.replace(/colors.primary/g, MKThemeStyles.colorBrandPrimary);
  xmlIcon = xmlIcon.replace(/colors.secondary/g, MKThemeStyles.colorBrandTertiary);

  return <SvgXml xml={xmlIcon} hitSlop={hitSlop ?? undefined} {...props} />;
};

export default MKCustomIcon;
