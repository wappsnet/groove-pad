import { FC, useEffect, useRef } from 'react';
import { Animated, Easing, ViewProps } from 'react-native';

interface MKRotateProps extends ViewProps {
  duration: number;
  active?: boolean;
}

const MKRotate: FC<MKRotateProps> = ({ children, duration = 1000, active = false }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (active) {
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration,
          easing: Easing.linear,
          useNativeDriver: true
        })
      ).start();
    }
  }, [active]);

  const spin = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <Animated.View
      style={{
        transform: [
          {
            rotate: spin
          }
        ]
      }}
    >
      {children}
    </Animated.View>
  );
};

export default MKRotate;
