import { MKApi } from 'store/api';
import { AlbumDto } from './types';

export const AlbumsApi = {
  query: async () => {
    return await MKApi.get<AlbumDto[]>('/mocks/albums.json');
  },
};
