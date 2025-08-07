import { default as Provider } from './Addons/components/MKAudioProvider';
import { default as Player } from './Addons/components/MKAudioPlayer';

const MKAudio = Object.assign(Provider, {
  Player
});

export default MKAudio;
