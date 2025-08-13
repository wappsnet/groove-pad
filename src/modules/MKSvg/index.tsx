import * as React from "react";
import { FC } from "react";

import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

import { MKThemeStyles } from "../MKTheme/styles";

interface MKSvgProps {
  icon: string;
  size: number;
  style?: StyleProp<ViewStyle>;
}

const MKSvg: FC<MKSvgProps> = ({ icon, size, style }) => (
    <SvgXml
      xml={icon
        .replace(/colors.primary/g, MKThemeStyles.colorBrandPrimary)
        .replace(/colors.secondary/g, MKThemeStyles.colorBrandSecondary)}
      style={style}
      width={size}
      height={size}
    />
  );

export default MKSvg;
