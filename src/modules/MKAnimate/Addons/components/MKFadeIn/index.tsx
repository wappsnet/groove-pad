import { FC, useEffect, useRef } from 'react';
import { Animated, ViewProps } from 'react-native';

interface MKFadeInProps extends ViewProps {
  duration: number;
}

const MKFadeIn: FC<MKFadeInProps> = ({ children, duration = 1000 }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

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
        opacity: animatedValue
      }}
    >
      {children}
    </Animated.View>
  );
};

export default MKFadeIn;
