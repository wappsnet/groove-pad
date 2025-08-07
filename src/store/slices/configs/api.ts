import { AxiosResponse } from 'axios';
import { MKApi } from 'store/api';
import { ConfigsDto } from './types';

export default {
  async get(): Promise<AxiosResponse<ConfigsDto>> {
    return await MKApi.get('/configs');
  }
};
