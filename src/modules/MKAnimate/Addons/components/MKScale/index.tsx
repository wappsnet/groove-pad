import React, { FC, useEffect, useRef } from 'react';

import { Animated, ViewProps } from 'react-native';

interface MKScaleProps extends ViewProps {
  duration: number;
}

const MKScale: FC<MKScaleProps> = ({ children, duration = 1000 }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [animatedValue, duration]);

  return (
    <Animated.View
      style={{
        transform: [
          {
            scale: animatedValue,
          },
        ],
      }}
    >
      {children}
    </Animated.View>
  );
};

export default MKScale;
