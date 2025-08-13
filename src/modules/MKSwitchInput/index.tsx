import { FC, ReactNode } from 'react';

import { Text, SwitchProps, Switch, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface MKSwitchInputProps extends SwitchProps {
  isValid?: boolean;
  isInvalid?: boolean;
  handleChange: (value: boolean) => void;
  checked: boolean;
  value: boolean;
  label: string;
  icon?: ReactNode;
}

const MKSwitchInput: FC<MKSwitchInputProps> = ({
  value,
  label,
  icon,
  checked,
  isInvalid,
  isValid,
  handleChange,
  ...props
}) => {
  console.log(icon, checked, isValid, isInvalid);
  return (
    <TouchableOpacity
      onPress={() => {
        handleChange(!value);
      }}
      style={styles.container}
    >
      {!!label && <Text style={styles.label}>{label}</Text>}
      <Switch {...props} />
    </TouchableOpacity>
  );
};

export default MKSwitchInput;
