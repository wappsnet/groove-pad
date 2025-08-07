import { forwardRef, useImperativeHandle, useRef, ReactNode, useState, useEffect, useCallback } from 'react';
import { Dimensions, Animated, ScrollView, ScrollViewProps, TouchableOpacity, View } from 'react-native';
import MKPortal from 'modules/MKPortal';
import { styles } from './styles';
const { width, height } = Dimensions.get('screen');

interface MKSheetProps extends ScrollViewProps {
  duration?: number;
  scale?: number;
  max?: number;
  grabSize?: number;
  children?: ReactNode;
}

export interface MKSheetRefProps {
  hide: () => void;
  open: () => void;
}

const MKSheet = forwardRef<MKSheetRefProps, MKSheetProps>(
  ({ duration = 500, grabSize = 100, max = 0.9, scale = 0.5, children }, ref) => {
    const transform = useRef(new Animated.Value(0)).current;
    const [visible, setVisible] = useState(false);
    const [grabY, setGrabY] = useState(0);
    const [initialScale, setInitialScale] = useState(scale);

    useEffect(() => {
      setInitialScale(scale);
    }, [scale]);

    useEffect(() => {
      if (visible) {
        setInitialScale(scale);
      } else {
        setInitialScale(0);
      }
    }, [visible, scale]);

    useEffect(() => {
      Animated.timing(transform, {
        useNativeDriver: false,
        toValue: Math.min(initialScale, max),
        duration: duration
      }).start(() => {
        if (initialScale <= 0) {
          setVisible(false);
        }
      });
    }, [initialScale, duration, transform]);

    const openSheet = useCallback(() => {
      setVisible(true);
      Animated.timing(transform, {
        useNativeDriver: false,
        toValue: 1,
        duration: duration
      }).start();
    }, [setVisible, transform, duration]);

    const hideSheet = useCallback(() => {
      Animated.timing(transform, {
        useNativeDriver: false,
        toValue: 0,
        duration: duration
      }).start(() => {
        setVisible(false);
      });
    }, [setVisible, transform, duration]);

    useImperativeHandle(ref, () => ({
      hide: hideSheet,
      open: openSheet
    }));

    const size = transform.interpolate({
      inputRange: [0, Math.min(initialScale, max)],
      outputRange: [0, height * Math.min(initialScale, max)],
      extrapolate: 'extend'
    });

    return (
      <MKPortal.Provider>
        <MKPortal.Consumer gateName="sheet">
          {visible && (
            <TouchableOpacity activeOpacity={1} style={styles.overlay} onPress={hideSheet}>
              <Animated.View
                style={[
                  styles.container,
                  {
                    width: width,
                    height: size
                  }
                ]}
              >
                <TouchableOpacity activeOpacity={1} style={styles.wrapper}>
                  <View
                    style={styles.grabber}
                    onResponderMove={(e) => {
                      if (grabY) {
                        if (grabY - e.nativeEvent.pageY > grabSize && initialScale === scale) {
                          setInitialScale(1);
                          setGrabY(0);
                          return false;
                        } else if (e.nativeEvent.pageY - grabY > grabSize && initialScale === 1) {
                          setInitialScale(scale);
                          setGrabY(0);
                          return false;
                        } else if (e.nativeEvent.pageY - grabY > grabSize && initialScale === scale) {
                          setInitialScale(0);
                          setGrabY(0);
                          return false;
                        }
                      }
                      return true;
                    }}
                    onStartShouldSetResponder={(e) => {
                      setGrabY(e.nativeEvent.pageY);
                      return true;
                    }}
                  >
                    <View style={styles.grabberHandle} />
                  </View>
                  <ScrollView style={styles.content}>{children}</ScrollView>
                </TouchableOpacity>
              </Animated.View>
            </TouchableOpacity>
          )}
        </MKPortal.Consumer>
      </MKPortal.Provider>
    );
  }
);

MKSheet.displayName = 'MKSheet';

export default MKSheet;
