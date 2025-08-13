import { FC } from "react";

import { Text } from "react-native";

import MKButton from "modules/MKButton";
import MKIcon from "modules/MKIcon";
import MKTypo from "modules/MKTypo";
import MKView from "modules/MKView";

import { styles } from "./styles";

type AppHeaderProps = {
  title?: string;
};

const AppHeader: FC<AppHeaderProps> = ({ title }) => (
    <MKView style={styles.container}>
      <MKView style={styles.left}>
        <MKButton type="light">
          <MKIcon.Awesome icon="arrow-left" />
        </MKButton>
      </MKView>
      <Text style={styles.middle}>
        <MKTypo type="h1">{title}</MKTypo>
      </Text>
      <MKView style={styles.right}>
        <MKButton type="light">
          <MKIcon.Awesome icon="cog" />
        </MKButton>
      </MKView>
    </MKView>
  );

export default AppHeader;
