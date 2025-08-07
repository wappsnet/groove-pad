import { AxiosResponse } from 'axios';
import { MKApi } from 'store/api';
import { MusicDto } from './types';

export default {
  async query(): Promise<AxiosResponse<MusicDto[]>> {
    return await MKApi.get('/mocks/musics.json');
  }
};
