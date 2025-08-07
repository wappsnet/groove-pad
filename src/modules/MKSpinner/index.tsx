import { FC } from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { styles } from './styles';

const MKSpinner: FC<ActivityIndicatorProps> = ({ size = 'large' }) => {
  return <ActivityIndicator size={size} color={styles.indicator.color} style={styles.indicator} />;
};

export default MKSpinner;
