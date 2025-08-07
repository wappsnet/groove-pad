import React, { FC } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import theme from 'assets/theme';
import { styles } from './styles';

interface MKTextAreaInputProps extends TextInputProps {
  isValid?: boolean;
  isInvalid?: boolean;
  handleChange: (value: string) => void;
  value: string;
}

const MKTextAreaInput: FC<MKTextAreaInputProps> = ({
  value,
  placeholder,
  isInvalid,
  isValid,
  handleChange,
  numberOfLines = 10,
  style = {},
  ...props
}) => (
  <TextInput
    style={[styles.input, style, isInvalid && theme.form.error, isValid && theme.form.success]}
    onChangeText={(text) => {
      handleChange(text);
    }}
    placeholder={placeholder}
    numberOfLines={numberOfLines}
    textContentType="name"
    value={value.toString()}
    multiline
    {...props}
  />
);

export default MKTextAreaInput;
