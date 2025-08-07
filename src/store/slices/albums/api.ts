import { AxiosResponse } from 'axios';
import { MKApi } from 'store/api';
import { AlbumDto } from './types';

export default {
  async query(): Promise<AxiosResponse<AlbumDto[]>> {
    return await MKApi.get('/mocks/albums.json');
  }
};
