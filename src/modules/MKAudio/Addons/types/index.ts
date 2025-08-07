import { PitchCorrectionQuality } from 'expo-av';

export interface MKAudioStatusProps {
  isLoaded: boolean;
  /**
   * Underlying implementation to use (when set to `MediaPlayer` it uses [Android's MediaPlayer](https://developer.android.com/reference/android/media/MediaPlayer.html),
   * uses [ExoPlayer](https://google.github.io/ExoPlayer/) otherwise). You may need to use this property if you're trying to play an item unsupported by ExoPlayer
   * ([formats supported by ExoPlayer](https://google.github.io/ExoPlayer/supported-formats.html), [formats supported by Android's MediaPlayer](https://developer.android.com/guide/appendix/media-formats.html#formats-table)).
   *
   * Note that setting this property takes effect only when the AV object is just being created (toggling its value later will do nothing).
   *
   * @platform android
   */
  androidImplementation?: string;
  /**
   * The location of the media source.
   */
  uri: string;
  /**
   * The minimum interval in milliseconds between calls of `onPlaybackStatusUpdate`. See `setOnPlaybackStatusUpdate()` for details.
   */
  progressUpdateIntervalMillis?: number;
  /**
   * The duration of the media in milliseconds. This is only present if the media has a duration.
   * > Note that in some cases, a media file's duration is readable on Android, but not on iOS.
   */
  durationMillis?: number;
  /**
   * The current position of playback in milliseconds.
   */
  positionMillis?: number;
  /**
   * The position until which the media has been buffered into memory. Like `durationMillis`, this is only present in some cases.
   */
  playableDurationMillis?: number;
  // @docsMissing
  seekMillisToleranceBefore?: number;
  // @docsMissing
  seekMillisToleranceAfter?: number;
  /**
   * A boolean describing if the media is supposed to play.
   */
  shouldPlay?: boolean;
  /**
   * A boolean describing if the media is currently playing.
   */
  isPlaying?: boolean;
  /**
   * A boolean describing if the media is currently buffering.
   */
  isBuffering?: boolean;
  /**
   * The current rate of the media.
   */
  rate?: number;
  /**
   * A boolean describing if we are correcting the pitch for a changed rate.
   */
  shouldCorrectPitch?: boolean;
  /**
   * iOS time pitch algorithm setting. See `setRateAsync` for details.
   */
  pitchCorrectionQuality?: PitchCorrectionQuality;
  /**
   * The current volume of the audio for this media.
   */
  volume?: number;
  /**
   * A boolean describing if the audio of this media is currently muted.
   */
  isMuted?: boolean;
  /**
   * A boolean describing if the media is currently looping.
   */
  isLooping?: boolean;
  /**
   * A boolean describing if the media just played to completion at the time that this status was received.
   * When the media plays to completion, the function passed in `setOnPlaybackStatusUpdate()` is called exactly once
   * with `didJustFinish` set to `true`. `didJustFinish` is never `true` in any other case.
   */
  didJustFinish?: boolean;
}

export interface MKAudioSoundProps {
  uri: string;
}

export interface MKAudioDataProps {
  sound: MKAudioSoundProps;
  status: MKAudioStatusProps;
}
