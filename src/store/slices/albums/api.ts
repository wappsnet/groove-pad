import { MKApi } from 'store/api';

import { AlbumDto } from './types';

export const AlbumsApi = {
  query: async () => await MKApi.get<AlbumDto[]>('/mocks/albums.json'),
};
