import { ImageBackground, ImageBackgroundProps } from 'react-native';
import { FC } from 'react';

const MKImage: FC<ImageBackgroundProps> = ({ style, source }) => {
  return <ImageBackground source={source} style={style} />;
};

export default MKImage;
