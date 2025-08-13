import { FC, useState, useRef, useEffect, useCallback, useMemo } from 'react';

import { View, Animated, PanResponder, ViewStyle, Pressable } from 'react-native';

import { styles } from './styles';

interface MKFormRangeProps {
  value: number;
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  onValueChange?: (value: number) => void;
  onSlidingStart?: () => void;
  onSlidingComplete?: (value: number) => void;
  trackStyle?: ViewStyle;
  thumbStyle?: ViewStyle;
}

const THUMB_SIZE = 24;

const MKFormRange: FC<MKFormRangeProps> = ({
  value,
  minimumValue = 0,
  maximumValue = 100,
  step = 1,
  onValueChange,
  onSlidingStart,
  onSlidingComplete,
  trackStyle,
  thumbStyle,
}) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [sliderValue, setSliderValue] = useState(value);
  const startXRef = useRef(0);
  const translateX = useRef(new Animated.Value(0)).current;

  // When the slider value or container width changes, update thumb position.
  useEffect(() => {
    if (containerWidth > 0) {
      const effectiveWidth = containerWidth - THUMB_SIZE;
      const ratio = (sliderValue - minimumValue) / (maximumValue - minimumValue);
      const newX = ratio * effectiveWidth;
      translateX.setValue(newX);
    }
  }, [sliderValue, containerWidth, minimumValue, maximumValue, translateX]);

  const calculateValue = useCallback(
    (newX: number): number => {
      const effectiveWidth = Math.max(0, containerWidth - THUMB_SIZE);
      const ratio = Math.max(0, Math.min(1, startXRef.current + newX / effectiveWidth));
      let newValue = ratio * (maximumValue - minimumValue) + minimumValue;
      if (step > 0) {
        newValue = Math.round(newValue / step) * step;
      }
      return newValue;
    },
    [containerWidth, maximumValue, minimumValue, step],
  );

  const handleChange = useCallback(
    (x: number) => {
      if (containerWidth <= 0) {
        return;
      }
      const effectiveWidth = containerWidth - THUMB_SIZE;
      // event.nativeEvent.locationX gives the tap position within the container.
      const tapX = Math.max(0, Math.min(x, effectiveWidth));
      translateX.setValue(tapX);
      const newVal = calculateValue(tapX);
      setSliderValue(newVal);
      onValueChange?.(newVal);
      onSlidingComplete?.(newVal);
      startXRef.current = x;
    },
    [containerWidth, translateX, calculateValue, onValueChange, onSlidingComplete],
  );

  const handleSlideStart = useCallback(
    (x: number) => {
      onSlidingStart?.();
      startXRef.current = x;
    },
    [onSlidingStart],
  );

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (e) => {
          handleSlideStart(e.nativeEvent.pageX);
        },
        onPanResponderMove: (e) => {
          handleChange(e.nativeEvent.pageX);
        },
        onPanResponderRelease: () => {
          onSlidingComplete?.(sliderValue);
        },
        onPanResponderTerminate: () => {
          onSlidingComplete?.(sliderValue);
        },
      }),
    [handleSlideStart, handleChange, onSlidingComplete, sliderValue],
  );

  return (
    <View
      style={styles.container}
      onLayout={(e) => {
        setContainerWidth(e.nativeEvent.layout.width);
      }}
      {...panResponder.panHandlers}
    >
      <Pressable
        style={styles.pressable}
        onPress={(event) => {
          handleChange(event.nativeEvent.pageX);
        }}
      >
        {/* Track */}
        <View style={[styles.track, trackStyle]} />
        {/* Active Track */}
        <Animated.View
          style={[
            styles.activeTrack,
            trackStyle,
            {
              width: translateX,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.thumbContainer,
            {
              transform: [{ translateX }],
            },
          ]}
          hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
        >
          <View style={[styles.thumb, thumbStyle]} />
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default MKFormRange;
