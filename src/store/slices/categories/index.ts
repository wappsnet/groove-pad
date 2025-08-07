import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { StoreLoadingEnum } from 'store/types/store';
import { CategoryDto, InitialStateDto } from './types';
import api from './api';

/**
 * Initial State
 */

const initialState: InitialStateDto = {
  loading: StoreLoadingEnum.idle,
  error: null,
  data: null
};

/**
 * Async Actions
 */
export const getCategoriesThunk = createAsyncThunk<CategoryDto[]>('categories/get', async () => {
  const response = await api.query();
  return response.data;
});

/**
 * Slices
 */

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {
    // get file
    [`${getCategoriesThunk.pending}`]: (state) => {
      state.loading = StoreLoadingEnum.pending;
    },
    [`${getCategoriesThunk.fulfilled}`]: (state, action) => {
      state.loading = StoreLoadingEnum.loaded;
      state.data = _.unionBy(state.data || [], action.payload, 'id');
    },
    [`${getCategoriesThunk.rejected}`]: (state) => {
      state.loading = StoreLoadingEnum.loaded;
    }
  }
});

/**
 * Selectors
 */
export const getCategories = (state: InitialStateDto): CategoryDto[] | null => state.data || null;
export const getLoading = (state: InitialStateDto): boolean => state.loading === StoreLoadingEnum.pending;
