import { AxiosResponse } from 'axios';
import { MKApi } from 'store/api';
import { PadDto } from './types';

export default {
  async query(): Promise<AxiosResponse<PadDto[]>> {
    return await MKApi.get('/mocks/pads.json');
  }
};
