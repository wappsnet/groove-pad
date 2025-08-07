import React, { useState } from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import { Audio } from 'expo-av';
import Assets from 'definitions/assets';
import MKIcon from 'modules/MKIcon';
import styles from './styles';
import {FC} from "react";
import {SoundObject} from "expo-av/build/Audio/Sound";

interface PadProps extends TouchableOpacityProps {
  id: string;
  title: string;
  icon: string;
  sound: any;
  onPress: () => void;
  loop: boolean;
  play: boolean;
}

const Pad: FC<PadProps> = ({id, title, icon, sound = null, onPress, loop = true, play = false, style = {}, ...props}) => {

  const [player, setPlayer] = useState<SoundObject | null>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const startPlay = async (effect: Audio.Sound) => {
    await effect.playAsync();
    setPlaying(true);
  };

  const stopPlay = async (effect: Audio.Sound) => {
    await effect.stopAsync();
    setPlaying(false);
  };

  const onPressPad = async () => {
    if (sound) {
      setLoading(true);

      const soundPlayer = {
        player
      };

      if (!soundPlayer.player) {
        soundPlayer.player = await Audio.Sound.createAsync(sound);
        await soundPlayer.player.sound.setIsLoopingAsync(loop);
      }

      if (!playing) {
        await startPlay(soundPlayer.player.sound);
      } else {
        await stopPlay(soundPlayer.player.sound);
      }

      setPlayer(soundPlayer.player);
      setLoading(false);
    }

    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressPad} {...props}>
      {sound && !loading && !playing && (
        <MKIcon.Custom icon={Assets.icons.play} style={styles.icon} />
      )}

      {loading && <MKIcon.Custom icon={Assets.icons.spinner} style={styles.icon} />}

      {!loading && playing && <MKIcon.Custom icon={Assets.icons.playing} style={styles.icon} />}
    </TouchableOpacity>
  );
}

export default Pad;
