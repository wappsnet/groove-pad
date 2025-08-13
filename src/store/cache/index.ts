import { AsyncStorage } from 'react-native';

import { StorageKeyEnum } from './types';

export const MKCache = {
  getByKey: async (key: StorageKeyEnum) => {
    const response = await AsyncStorage.getItem(key);

    if (response) {
      return JSON.parse(response);
    }

    return null;
  },

  saveByKey: async (key: StorageKeyEnum, data: any = null) => {
    await AsyncStorage.setItem(key, JSON.stringify(data));

    const response = await AsyncStorage.getItem(key);

    if (response) {
      return JSON.parse(response);
    }

    return null;
  }
};
