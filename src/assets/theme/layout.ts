import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = Dimensions.get('window').height + 50;
const scrollSpace = 10;
const contentSpace = 15;
const wrapperSpace = 20;

export default {
  window: {
    width,
    height,
  },
  scroll: {
    space: scrollSpace,
  },
  wrapper: {
    width: width - (2 * wrapperSpace),
    space: wrapperSpace,
  },
  content: {
    width: width - (2 * contentSpace - 2 * scrollSpace),
    space: contentSpace,
  },
};
