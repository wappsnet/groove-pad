import { MKApi } from 'store/api';
import { CategoryDto } from './types';

export const CategoriesApi = {
  query: async () => {
    return await MKApi.get<CategoryDto[]>('/mocks/categories.json');
  },
};
