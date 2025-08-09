import { FC } from 'react';
import { KeyboardAvoidingView, SafeAreaView, View, ViewProps } from 'react-native';
import { styles } from './styles';

const MKScreenContainer: FC<ViewProps> = ({ children, ...otherProps }) => {
  return (
    <KeyboardAvoidingView style={styles.keyboard} behavior="height" enabled={true}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container} {...otherProps}>
          {children}
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default MKScreenContainer;
