import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { StoreLoadingEnum } from 'store/types/store';
import { InitialStateDto, PadDto } from './types';
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
export const getPadsThunk = createAsyncThunk<PadDto[]>('pads/query', async () => {
  const response = await api.query();
  return response.data;
});

/**
 * Slices
 */

export const padsSlice = createSlice({
  name: 'pads',
  initialState,
  reducers: {},
  extraReducers: {
    // get file
    [`${getPadsThunk.pending}`]: (state) => {
      state.loading = StoreLoadingEnum.pending;
    },
    [`${getPadsThunk.fulfilled}`]: (state, action) => {
      state.loading = StoreLoadingEnum.loaded;
      state.data = _.unionBy(state.data || [], action.payload, 'id');
    },
    [`${getPadsThunk.rejected}`]: (state) => {
      state.loading = StoreLoadingEnum.loaded;
    }
  }
});

/**
 * Selectors
 */
export const getPads = (state: InitialStateDto): PadDto[] | null => state.data || null;
export const getPadsIsLoading = (state: InitialStateDto): boolean => state.loading === StoreLoadingEnum.pending;
