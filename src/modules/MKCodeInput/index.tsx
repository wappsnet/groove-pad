import { FC, useState, createRef } from 'react';
import { range } from 'lodash';
import { Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import theme from 'assets/theme';
import { styles } from './styles';

const DIGITS_COUNT = 6;

type MKCodeInputProps = {
  value?: string;
  length?: number;
  isValid?: boolean;
  isInvalid?: boolean;
  handleChange: (value: string) => void;
};

const MKCodeInput: FC<MKCodeInputProps> = ({ value = '', length = DIGITS_COUNT, handleChange, isValid, isInvalid }) => {
  const inputRef = createRef<TextInput>();

  const [focused, setFocused] = useState(false);

  const values = value.split('');
  const selectedIndex = values.length < length ? values.length : length - 1;
  const hideInput = values.length >= length;
  const filled = values.length === length - 1;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          setFocused(true);
        }}
      >
        <View style={styles.wrap}>
          <TextInput
            value=""
            ref={inputRef}
            textContentType="oneTimeCode"
            onChangeText={(value) => {
              handleChange(value);
            }}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            style={[
              styles.input,
              {
                left: selectedIndex * 45,
                opacity: hideInput ? 0 : 1
              }
            ]}
          />
          {range(length).map((v, index) => {
            const selected = values.length === index;

            return (
              <View
                style={[
                  styles.display,
                  index === length - 1 && styles.noBorder,
                  isInvalid && theme.form.error,
                  isValid && theme.form.success
                ]}
                key={v}
              >
                <Text style={styles.text}>{values[index] || ''}</Text>
                {(selected || filled) && focused && <View style={styles.shadows} />}
              </View>
            );
          })}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MKCodeInput;
