import { MKApi } from 'store/api';
import { EffectDto } from './types';

export const EffectsApi = {
  query: async () => {
    return await MKApi.get<EffectDto[]>('/mocks/effects.json');
  },
};
