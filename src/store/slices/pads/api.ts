import { MKApi } from 'store/api';
import { PadDto } from './types';

export const PadsApi = {
  query: async () => {
    return await MKApi.get<PadDto>('/mocks/pads.json');
  },
};
