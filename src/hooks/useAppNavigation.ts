import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const useAppNavigation = () => useNavigation<NativeStackNavigationProp<Record<string, any>>>();
