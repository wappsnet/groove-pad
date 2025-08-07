import { AxiosResponse } from 'axios';
import { MKApi } from 'store/api';
import { AuthorDto } from './types';

export default {
  async query(): Promise<AxiosResponse<AuthorDto[]>> {
    return await MKApi.get('/mocks/authors.json');
  }
};
