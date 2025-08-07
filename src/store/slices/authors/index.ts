import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { StoreLoadingEnum } from 'store/types/store';
import { AuthorDto, InitialStateDto } from './types';
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
export const getAuthorsThunk = createAsyncThunk<AuthorDto[]>('authors/query', async () => {
  const response = await api.query();
  return response.data;
});

/**
 * Slices
 */

export const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: {
    // get file
    [`${getAuthorsThunk.pending}`]: (state) => {
      state.loading = StoreLoadingEnum.pending;
    },
    [`${getAuthorsThunk.fulfilled}`]: (state, action) => {
      state.loading = StoreLoadingEnum.loaded;
      state.data = _.unionBy(state.data || [], action.payload, 'id');
    },
    [`${getAuthorsThunk.rejected}`]: (state) => {
      state.loading = StoreLoadingEnum.loaded;
    }
  }
});

/**
 * Selectors
 */
export const getAuthors = (state: InitialStateDto): AuthorDto[] | null => state.data || null;
export const getLoading = (state: InitialStateDto): boolean => state.loading === StoreLoadingEnum.pending;
