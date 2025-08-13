import { FC, memo, ReactNode, useEffect, useRef, useState } from 'react';

import { Animated, Dimensions, FlatList, FlatListProps, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

const { width } = Dimensions.get('window');

type MKSliderDataProps = {
  uri: string;
  id: string;
  header?: string;
};

interface MKSliderProps extends FlatListProps<MKSliderDataProps> {
  data: MKSliderDataProps[];
  duration?: number;
  horizontal?: boolean;
  loop?: boolean;
  space?: number;
  size?: number;
  transformY?: number;
  activeSlide?: number;
  onSlide?: (index: number) => void;
  nextButton?: ReactNode;
  prevButton?: ReactNode;
  autoplay?: boolean;
  itemVisiblePercentThreshold?: number;
}

const MKSlider: FC<MKSliderProps> = ({
  data = [],
  loop = true,
  size = width,
  duration = 1000,
  transformY = 0,
  scrollEventThrottle = 50,
  itemVisiblePercentThreshold = 50,
  snapToAlignment = 'start',
  renderItem,
  showsHorizontalScrollIndicator = false,
  horizontal = true,
  space = 0,
  activeSlide = 0,
  onSlide,
  prevButton,
  nextButton,
  autoplay,
  ...props
}) => {
  console.log(loop, duration, itemVisiblePercentThreshold, snapToAlignment, space);
  const autoTimeRef = useRef<number | null>(null);
  const flatListRef = useRef<FlatList<MKSliderDataProps>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(activeSlide);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: activeSlide,
      });
    }
  }, [activeSlide]);

  useEffect(() => {
    onSlide?.(activeIndex);
  }, [activeIndex, onSlide]);

  useEffect(() => {
    if (autoTimeRef.current) {
      window.clearInterval(autoTimeRef.current);
    }

    if (autoplay) {
      autoTimeRef.current = window.setInterval(() => {
        const newIndex = activeIndex + 1;
        if (newIndex >= data.length) {
          setActiveIndex(0);
        } else {
          setActiveIndex(newIndex);
        }
      });
    }

    return () => {
      if (autoTimeRef.current) {
        window.clearInterval(autoTimeRef.current);
      }
    };
  }, [autoplay, activeIndex, data.length]);

  const handleOnPrev = () => {
    if (activeIndex) {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          animated: true,
          index: activeIndex - 1,
        });
      }
    }
  };

  const handleOnNext = () => {
    if (activeIndex < data.length - 1) {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          animated: true,
          index: activeIndex + 1,
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      {prevButton && (
        <TouchableOpacity style={[styles.button, styles.prev]} onPress={handleOnPrev}>
          {prevButton}
        </TouchableOpacity>
      )}
      {nextButton && (
        <TouchableOpacity style={[styles.button, styles.prev]} onPress={handleOnNext}>
          {nextButton}
        </TouchableOpacity>
      )}
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={({ item, index, separators }) => {
          const inputRange = [(index - 2) * size, (index - 1) * size, index * size];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [transformY * 2, transformY, transformY * 2],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={[
                styles.item,
                { width: size },
                {
                  transform: [{ translateY }],
                },
              ]}
            >
              {renderItem?.({ item, index, separators })}
            </Animated.View>
          );
        }}
        horizontal={horizontal}
        keyExtractor={(item) => item.id}
        snapToInterval={size}
        scrollEventThrottle={scrollEventThrottle}
        getItemLayout={(_data, index: number) => ({
          length: size,
          offset: size * (index - 1),
          index,
        })}
        bounces={false}
        decelerationRate={0}
        renderToHardwareTextureAndroid
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        onScroll={(e) => {
          setActiveIndex(Math.round(e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width));
          Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x: scrollX },
                },
              },
            ],
            {
              useNativeDriver: false,
            },
          );
        }}
        {...props}
      />
    </View>
  );
};

export default memo(MKSlider);
