import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
  require('./stories');
}, module);

const Storybook = getStorybookUI({ asyncStorage: null });

export default Storybook;
