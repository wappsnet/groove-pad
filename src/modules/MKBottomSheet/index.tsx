// BottomSheet.tsx
import { useRef, useCallback, useEffect, ReactNode, FC } from 'react';

import { Animated, Dimensions, PanResponder, View, TouchableWithoutFeedback, ScrollView } from 'react-native';

const { height } = Dimensions.get('window');
import { styles } from './styles';

interface MKBottomSheetProps {
  children: ReactNode;
  onClose?: () => void;
}

const MKBottomSheet: FC<MKBottomSheetProps> = ({ children, onClose = () => {} }) => {
  // The sheet will occupy 70% of the screen height
  const sheetHeight = height * 0.7;
  // Start off-screen: below the bottom
  const translateY = useRef(new Animated.Value(height)).current;

  // Function to open the sheet
  const openSheet = useCallback(() => {
    Animated.timing(translateY, {
      toValue: height - sheetHeight, // move sheet upward by its height
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [sheetHeight, translateY]);

  // Function to close the sheet
  const closeSheet = useCallback(() => {
    Animated.timing(translateY, {
      toValue: height, // move sheet offscreen
      duration: 300,
      useNativeDriver: true,
    }).start(() => onClose());
  }, [onClose, translateY]);

  // Set up responder to handle pan gestures
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => Math.abs(gestureState.dy) > 5,
      onPanResponderMove: (evt, gestureState) => {
        // Only allow downward dragging
        if (gestureState.dy > 0) {
          translateY.setValue(height - sheetHeight + gestureState.dy);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        // if dragged downward more than 50 then close the sheet, otherwise snap back
        if (gestureState.dy > 50) {
          closeSheet();
        } else {
          openSheet();
        }
      },
    }),
  ).current;

  // Open the sheet when the component mounts
  useEffect(() => {
    openSheet();
  }, [openSheet]);

  return (
    <>
      {/* Overlay to dim the background and close sheet on tap */}
      <TouchableWithoutFeedback onPress={closeSheet}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      {/* Animated bottom sheet container */}
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.container,
          {
            height: sheetHeight,
            transform: [{ translateY }],
          },
        ]}
      >
        {/* A small grabber indicator */}
        <View style={styles.grabber} />
        <ScrollView style={styles.content}>{children}</ScrollView>
      </Animated.View>
    </>
  );
};

export default MKBottomSheet;
