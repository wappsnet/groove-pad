import { FC } from 'react';
import { SvgXml } from 'react-native-svg';
import { MKThemeStyles } from 'modules/MKTheme/styles';
import { ViewProps } from 'react-native';

interface MKCustomIconProps extends ViewProps {
  icon: string;
}

const MKCustomIcon: FC<MKCustomIconProps> = ({ icon, hitSlop, ...props }) => {
  let xmlIcon = icon;

  xmlIcon = xmlIcon.replace(/colors.fill/g, MKThemeStyles.colorBrandSecondary);
  xmlIcon = xmlIcon.replace(/colors.primary/g, MKThemeStyles.colorBrandPrimary);
  xmlIcon = xmlIcon.replace(/colors.secondary/g, MKThemeStyles.colorBrandTertiary);

  return <SvgXml xml={xmlIcon} hitSlop={hitSlop ?? undefined} {...props} />;
};

export default MKCustomIcon;
