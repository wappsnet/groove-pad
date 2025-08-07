import { SvgXml } from "react-native-svg";
import * as React from "react";
import { FC } from "react";
import { MKThemeStyles } from "../MKTheme/styles";
import { StyleProp, ViewStyle } from "react-native";

interface MKSvgProps {
  icon: string;
  size: number;
  style?: StyleProp<ViewStyle>;
}

const MKSvg: FC<MKSvgProps> = ({ icon, size, style }) => {
  return (
    <SvgXml
      xml={icon
        .replace(/colors.primary/g, MKThemeStyles.colorBrandPrimary)
        .replace(/colors.secondary/g, MKThemeStyles.colorBrandSecondary)}
      style={style}
      width={size}
      height={size}
    />
  );
};

export default MKSvg;
