import { FC, ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import MKSpinner from 'modules/MKSpinner';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  disabled?: boolean;
  loading?: boolean;
  type?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'light';
  grid?: 'row' | 'column';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const MKButton: FC<ButtonProps> = ({
  style = {},
  children,
  startIcon,
  endIcon,
  disabled = false,
  type = 'primary',
  grid = 'row',
  loading = false,
  ...props
}) => {
  const buttonStyle = { ...styles.default, ...styles[type], flexDirection: grid };

  if (disabled) {
    buttonStyle.opacity = 0.5;
  }

  return (
    <TouchableOpacity style={buttonStyle} disabled={disabled} {...props}>
      {startIcon && <Text style={styles.startIcon}>{startIcon}</Text>}
      {children}
      {endIcon && <Text style={styles.endIcon}>{endIcon}</Text>}
      {loading && <MKSpinner />}
    </TouchableOpacity>
  );
};

export default MKButton;
