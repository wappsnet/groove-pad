import { MKApi } from 'store/api';

import { MusicDto } from './types';

export const MusicsApi = {
  query: async () => await MKApi.get<MusicDto[]>('/mocks/musics.json'),
};
