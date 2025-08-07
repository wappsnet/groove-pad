import React, { FC, useEffect, useMemo, useState } from 'react';

import { Animated, Image, View, ViewStyle, ImageURISource } from 'react-native';

import { styles } from './styles';

type MKRangeProps = {
  val?: number;
  disabled?: boolean;
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  thumbTintColor?: string;
  thumbTouchSize?: number;
  onSlidingStart?: () => void;
  onSlidingComplete?: () => void;
  onChangeValue?: (val: number) => void;
  style?: ViewStyle;
  trackStyle?: ViewStyle;
  thumbStyle?: ViewStyle;
  thumbImage?: ImageURISource;
  debugTouchArea?: boolean;
};

const MKRange: FC<MKRangeProps> = ({
  thumbImage,
  style,
  trackStyle,
  thumbStyle,
  val = 0,
  disabled = false,
  minimumValue = 0,
  maximumValue = 1,
  step = 0,
  onChangeValue,
  onSlidingStart,
  onSlidingComplete,
  thumbTouchSize = 20,
  debugTouchArea = true,
  ...other
}) => {
  const [state, setState] = useState({
    containerSize: {
      width: 0,
      height: thumbTouchSize
    },
    trackSize: {
      width: 0,
      height: thumbTouchSize
    },
    thumbSize: {
      width: thumbTouchSize,
      height: thumbTouchSize
    }
  });
  const [value, setValue] = useState(val);

  useEffect(() => {
    setValue(val);
  }, [setValue, val]);

  const _getValue = (dx: number) => {
    const length = state.containerSize.width - state.thumbSize.width;
    const ratio = dx / length;

    if (step) {
      return Math.max(
        minimumValue,
        Math.min(maximumValue, minimumValue + Math.round((ratio * (maximumValue - minimumValue)) / step) * step)
      );
    }

    return Math.max(minimumValue, Math.min(maximumValue, ratio * (maximumValue - minimumValue) + minimumValue));
  };

  const touchOverflowStyle = useMemo(() => {
    const width = Math.max(0, thumbTouchSize - state.thumbSize.width);
    const height = Math.max(0, thumbTouchSize - state.containerSize.height);
    const verticalMargin = -height / 2;
    const horizontalMargin = -width / 2;

    return {
      marginTop: verticalMargin,
      marginBottom: verticalMargin,
      marginLeft: horizontalMargin,
      marginRight: horizontalMargin
    };
  }, [thumbTouchSize, state.thumbSize, state.containerSize]);

  return (
    <View
      {...other}
      style={[styles.container, style]}
      onLayout={(e) => {
        setState({
          ...state,
          containerSize: {
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height
          }
        });
      }}
    >
      <View
        style={[styles.track, trackStyle]}
        onLayout={(e) => {
          setState({
            ...state,
            trackSize: {
              width: e.nativeEvent.layout.width,
              height: e.nativeEvent.layout.height
            }
          });
        }}
      />
      <Animated.View
        style={[
          styles.track,
          trackStyle,
          {
            width: state.containerSize.width
          }
        ]}
      >
        {debugTouchArea && (
          <Animated.View
            style={[
              styles.activeArea,
              {
                width: state.containerSize.width * value,
                height: state.trackSize.height
              }
            ]}
            pointerEvents="none"
          />
        )}
      </Animated.View>
      <Animated.View
        style={[
          styles.thumb,
          thumbStyle,
          {
            transform: [
              {
                translateX: state.containerSize.width * value
              }
            ]
          }
        ]}
        onLayout={(e) => {
          setState({
            ...state,
            thumbSize: {
              width: e.nativeEvent.layout.width,
              height: e.nativeEvent.layout.height
            }
          });
        }}
      >
        {thumbImage && <Image source={thumbImage} />}
      </Animated.View>
      <View
        style={[styles.touchArea, touchOverflowStyle]}
        onResponderStart={() => {
          onSlidingStart?.();
        }}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderMove={(e) => {
          if (disabled) {
            return;
          }

          const newValue = _getValue(e.nativeEvent.locationX);

          setValue(newValue);
          onChangeValue?.(newValue);
        }}
        onResponderEnd={(e) => {
          if (disabled) {
            return;
          }

          setValue(_getValue(e.nativeEvent.locationX));
          onSlidingComplete?.();
        }}
        onResponderTerminate={(e) => {
          if (disabled) {
            return;
          }

          setValue(_getValue(e.nativeEvent.locationX));
          onSlidingComplete?.();
        }}
      />
    </View>
  );
};

export default MKRange;
