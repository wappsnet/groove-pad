import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MKApiError, StoreLoadingEnum } from 'store/types';
import { createApiError, createExtraReducer, getSliceLoadingState } from 'store/helpers';
import { CategoryDto, InitialStateDto } from './types';
import { CategoriesApi } from './api';

/**
 * Initial State
 */

const initialState: InitialStateDto = {
  loading: StoreLoadingEnum.idle,
  error: null,
  data: null,
};

/**
 * Async Actions
 */
export const getCategoriesThunk = createAsyncThunk<CategoryDto[], void, { rejectValue: MKApiError }>(
  'categories/get',
  async (_, thunkAPI) => {
    try {
      const response = await CategoriesApi.query();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(createApiError(e));
    }
  },
);

/**
 * Slices
 */

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    createExtraReducer(builder, getCategoriesThunk);
  },
});

/**
 * Selectors
 */
export const getCategories = (state: InitialStateDto) => state.data || null;
export const getLoading = (state: InitialStateDto) => getSliceLoadingState(state.loading);
