import { MKApi } from 'store/api';

import { ConfigsDto } from './types';

export const ConfigsApi = {
  get: async () => await MKApi.get<ConfigsDto>('/configs'),
};
