import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { createApiError, createExtraReducer, getSliceLoadingState } from 'store/helpers';
import { MKApiError, StoreLoadingEnum } from 'store/types';

import { AuthorsApi } from './api';
import { AuthorDto, InitialStateDto } from './types';

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
export const getAuthorsThunk = createAsyncThunk<AuthorDto[], void, { rejectValue: MKApiError }>(
  'authors/query',
  async (_, thankAPI) => {
    try {
      const response = await AuthorsApi.query();
      return response.data;
    } catch (e) {
      return thankAPI.rejectWithValue(createApiError(e));
    }
  },
);

/**
 * Slices
 */

export const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    createExtraReducer(builder, getAuthorsThunk);
  },
});

/**
 * Selectors
 */
export const getAuthors = (state: InitialStateDto) => state.data || null;
export const getLoading = (state: InitialStateDto) => getSliceLoadingState(state.loading);
