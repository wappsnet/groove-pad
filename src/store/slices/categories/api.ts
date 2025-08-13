import { MKApi } from 'store/api';

import { CategoryDto } from './types';

export const CategoriesApi = {
  query: async () => await MKApi.get<CategoryDto[]>('/mocks/categories.json'),
};
