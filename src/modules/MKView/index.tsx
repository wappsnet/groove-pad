import { FC, ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

interface MKViewProps extends ViewProps {
  children?: ReactNode;
}

const MKView: FC<MKViewProps> = ({ children, ...props }) => {
  return <View {...props}>{children}</View>;
};

export default MKView;
