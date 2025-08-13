import { FC, ReactNode } from 'react';

import { View } from 'react-native';

import MKAudioContainer from '../MKAudioProvider';

import { styles } from './styles';

type MKAudioPlayerProps = {
  uri: string;
  banner?: ReactNode;
};

const MKAudioPlayer: FC<MKAudioPlayerProps> = ({ uri, banner }) => (
    <View style={[styles.container]}>
      <MKAudioContainer uri={uri}>
        {({ status, sound }) => {
          console.log(sound, status);
          return (
            <View style={[styles.wrapper]}>
              {banner && <View style={[styles.banner]}>{banner}</View>}
              <View style={[styles.controls]}>
                <View style={[styles.range]} />
                <View style={[styles.buttons]} />
              </View>
            </View>
          );
        }}
      </MKAudioContainer>
    </View>
  );

export default MKAudioPlayer;
