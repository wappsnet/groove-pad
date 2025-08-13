import { MKApi } from 'store/api';

import { AuthorDto } from './types';

export const AuthorsApi = {
  query: async () => await MKApi.get<AuthorDto[]>('/mocks/authors.json'),
};
