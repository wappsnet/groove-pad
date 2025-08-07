import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import MKButton from 'modules/MKButton';
import MKIcon from 'modules/MKIcon';

storiesOf('Button', module)
  .add('with text', () => (
    <MKButton onPress={action('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </MKButton>
  ))
  .add('with icon', () => (
    <MKButton onPress={action('clicked-emoji')}>
      <MKIcon.Awesome icon="cogs" />
      <Text>{text('Button text', 'Hello Button')}</Text>
    </MKButton>
  ));
