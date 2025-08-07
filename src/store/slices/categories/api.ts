import { AxiosResponse } from 'axios';
import { MKApi } from 'store/api';
import { CategoryDto } from './types';

export default {
  async query(): Promise<AxiosResponse<CategoryDto[]>> {
    return await MKApi.get('/mocks/categories.json');
  }
};
