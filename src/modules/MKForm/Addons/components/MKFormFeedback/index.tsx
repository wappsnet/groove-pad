import { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { styles } from './styles';

interface MKFormFeedbackProps extends ViewProps {
  variant: 'danger' | 'success' | 'warning';
}

const MKFormFeedback: FC<MKFormFeedbackProps> = ({ children, variant }) => {
  return <View style={styles[variant]}>{children}</View>;
};

export default MKFormFeedback;
