import { MKApi } from 'store/api';
import { ConfigsDto } from './types';

export const ConfigsApi = {
  get: async () => {
    return await MKApi.get<ConfigsDto>('/configs');
  },
};
