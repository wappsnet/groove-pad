import { AxiosResponse } from 'axios';
import { MKApi } from 'store/api';
import { EffectDto } from './types';

export default {
  async query(): Promise<AxiosResponse<EffectDto[]>> {
    return await MKApi.get('/mocks/effects.json');
  }
};
