import { FC } from 'react';
import { KeyboardAvoidingView, View, ViewProps } from 'react-native';
import { styles } from './styles';

const MKScreenContainer: FC<ViewProps> = ({ children, ...otherProps }) => {
  return (
    <KeyboardAvoidingView style={styles.keyboard}>
      <View style={styles.container} {...otherProps}>
        {children}
      </View>
    </KeyboardAvoidingView>
  );
};

export default MKScreenContainer;
