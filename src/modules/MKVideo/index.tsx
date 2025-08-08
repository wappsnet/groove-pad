import { FC, useRef } from "react";
import { Video, VideoProps } from "expo-av";
import { styles } from "./styles";
import { View } from "react-native";

type MVideoProps = {
  video: VideoProps;
  resizeMode: "contain" | "cover";
};

const MVideo: FC<MVideoProps> = ({ video, resizeMode = "contain" }) => {
  const ref = useRef(null);

  console.log(resizeMode);
  return (
    <View style={[styles.container]}>
      <Video ref={ref} {...video} />
    </View>
  );
};

export default MVideo;
