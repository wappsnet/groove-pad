import { default as Player } from './Addons/components/MKAudioPlayer';
import { default as Provider } from './Addons/components/MKAudioProvider';

const MKAudio = Object.assign(Provider, {
  Player
});

export default MKAudio;
