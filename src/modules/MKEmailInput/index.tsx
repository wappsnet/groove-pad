import { FC } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import theme from 'assets/theme';
import { styles } from './styles';

interface MKEmailInputProps extends TextInputProps {
  isValid?: boolean;
  isInvalid?: boolean;
  handleChange: (value: string) => void;
  value: string;
}

const MKEmailInput: FC<MKEmailInputProps> = ({
  value,
  placeholder,
  isInvalid,
  isValid,
  handleChange,
  style = {},
  ...props
}) => {
  return (
    <TextInput
      style={[styles.input, style, isInvalid && theme.form.error, isValid && theme.form.success]}
      onChangeText={handleChange}
      placeholder={placeholder}
      placeholderTextColor="gray"
      keyboardType="email-address"
      textContentType="emailAddress"
      multiline={false}
      value={value}
      {...props}
    />
  );
};

export default MKEmailInput;
