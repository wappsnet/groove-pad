import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const vw = (size: number) => (width / 100) * size;
export const vh = (size: number) => (height / 100) * size;
