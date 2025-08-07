import { FC, ReactNode, useEffect, useRef } from 'react';
import { Audio } from 'expo-av';
import { MKAudioDataProps } from '../../types';

type MKAudioProviderProps = {
  uri: string;
  children?: (data: MKAudioDataProps) => ReactNode;
};

const MKAudioProvider: FC<MKAudioProviderProps> = ({ children, uri }, ref) => {
  const audio = useRef<MKAudioDataProps>({
    sound: { uri },
    status: {
      uri,
      isLoaded: false
    }
  });

  useEffect(() => {
    Audio.Sound.createAsync({ uri }).then((data) => {
      audio.current = {
        sound: {
          uri
        },
        status: {
          uri,
          ...data.status
        }
      };
    });
  }, [uri]);

  return <>{children?.(ref.current)}</>;
};

export default MKAudioProvider;
