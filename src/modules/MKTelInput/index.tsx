import React, { FC } from 'react';

import { TextInput, TextInputProps } from 'react-native';

import theme from 'assets/theme';

import { styles } from './styles';

interface MKTelInputProps extends TextInputProps {
  isValid?: boolean;
  isInvalid?: boolean;
  handleChange: (value: string) => void;
  value: string;
}

const MKTelInput: FC<MKTelInputProps> = ({
  value,
  placeholder,
  isInvalid,
  isValid,
  handleChange,
  style = {},
  ...props
}) => (
  <TextInput
    style={[styles.input, style, isInvalid && theme.form.error, isValid && theme.form.success]}
    onChangeText={(text) => {
      handleChange(text);
    }}
    placeholder={placeholder}
    placeholderTextColor="gray"
    keyboardType="phone-pad"
    value={value.toString()}
    {...props}
  />
);

export default MKTelInput;
