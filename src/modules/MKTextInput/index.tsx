import React, { FC } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import theme from 'assets/theme';
import { styles } from './styles';

interface MKTextInputProps extends TextInputProps {
  isValid?: boolean;
  isInvalid?: boolean;
  handleChange: (value: string) => void;
  value: string;
}

const MKTextInput: FC<MKTextInputProps> = ({
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
    value={value.toString()}
    {...props}
  />
);

export default MKTextInput;
