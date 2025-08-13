import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { createApiError, createExtraReducer, getSliceLoadingState } from 'store/helpers';
import { MKApiError, StoreLoadingEnum } from 'store/types';

import { MusicsApi } from './api';
import { InitialStateDto, MusicDto } from './types';

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
export const getMusicsThunk = createAsyncThunk<MusicDto[], void, { rejectValue: MKApiError }>(
  'musics/get',
  async (_, thunkAPI) => {
    try {
      const response = await MusicsApi.query();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(createApiError(e));
    }
  },
);

/**
 * Slices
 */

export const musicsSlice = createSlice({
  name: 'musics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    createExtraReducer(builder, getMusicsThunk);
  },
});

/**
 * Selectors
 */
export const getMusics = (state: InitialStateDto) => state.data || null;
export const getMusicsIsLoading = (state: InitialStateDto) => getSliceLoadingState(state.loading);
