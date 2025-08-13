import { FC } from 'react';

import { ImageBackground, ImageBackgroundProps } from 'react-native';

const MKImage: FC<ImageBackgroundProps> = ({ style, source }) => <ImageBackground source={source} style={style} />;

export default MKImage;
