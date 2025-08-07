import { FC, useEffect, useRef } from 'react';
import { Animated, ViewProps } from 'react-native';

interface MKSlideProps extends ViewProps {
  direction?: 'right' | 'left' | 'top' | 'bottom';
  duration: number;
}

const MKSlide: FC<MKSlideProps> = ({ children, direction = 'right', duration = 500 }) => {
  let startValue = -500;

  if (direction === 'left') {
    startValue = 500;
  }

  const animatedValue = useRef(new Animated.Value(startValue)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration,
      useNativeDriver: true
    }).start();
  }, [animatedValue]);

  return (
    <Animated.View
      style={{
        transform: [
          {
            translateX: animatedValue
          }
        ]
      }}
    >
      {children}
    </Animated.View>
  );
};

export default MKSlide;
