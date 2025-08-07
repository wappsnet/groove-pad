import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { StoreLoadingEnum } from 'store/types/store';
import { InitialStateDto, MusicDto } from './types';
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
export const getMusicsThunk = createAsyncThunk<MusicDto[]>('musics/get', async () => {
  const response = await api.query();
  return response.data;
});

/**
 * Slices
 */

export const musicsSlice = createSlice({
  name: 'musics',
  initialState,
  reducers: {},
  extraReducers: {
    // get file
    [`${getMusicsThunk.pending}`]: (state) => {
      state.loading = StoreLoadingEnum.pending;
    },
    [`${getMusicsThunk.fulfilled}`]: (state, action) => {
      state.loading = StoreLoadingEnum.loaded;
      state.data = _.unionBy(state.data || [], action.payload, 'id');
    },
    [`${getMusicsThunk.rejected}`]: (state) => {
      state.loading = StoreLoadingEnum.loaded;
    }
  }
});

/**
 * Selectors
 */
export const getMusics = (state: InitialStateDto): MusicDto[] | null => state.data || null;
export const getMusicsIsLoading = (state: InitialStateDto): boolean => state.loading === StoreLoadingEnum.pending;
