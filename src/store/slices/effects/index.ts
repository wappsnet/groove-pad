import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { StoreLoadingEnum } from 'store/types/store';
import { EffectDto, InitialStateDto } from './types';
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
export const getEffectsThunk = createAsyncThunk<EffectDto[]>('effects/get', async () => {
  const response = await api.query();
  return response.data;
});

/**
 * Slices
 */

export const effectsSlice = createSlice({
  name: 'effects',
  initialState,
  reducers: {},
  extraReducers: {
    // get file
    [`${getEffectsThunk.pending}`]: (state) => {
      state.loading = StoreLoadingEnum.pending;
    },
    [`${getEffectsThunk.fulfilled}`]: (state, action) => {
      state.loading = StoreLoadingEnum.loaded;
      state.data = _.unionBy(state.data || [], action.payload, 'id');
    },
    [`${getEffectsThunk.rejected}`]: (state) => {
      state.loading = StoreLoadingEnum.loaded;
    }
  }
});

/**
 * Selectors
 */
export const getEffects = (state: InitialStateDto): EffectDto[] | null => state.data || null;
export const getLoading = (state: InitialStateDto): boolean => state.loading === StoreLoadingEnum.pending;
