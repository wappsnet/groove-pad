import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MKApiError, StoreLoadingEnum } from 'store/types';
import { createApiError, createExtraReducer, getSliceLoadingState } from 'store/helpers';
import { EffectDto, InitialStateDto } from './types';
import { EffectsApi } from './api';

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
export const getEffectsThunk = createAsyncThunk<EffectDto[], void, { rejectValue: MKApiError }>(
  'effects/get',
  async (_, thunkAPI) => {
    try {
      const response = await EffectsApi.query();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(createApiError(e));
    }
  },
);

/**
 * Slices
 */

export const effectsSlice = createSlice({
  name: 'effects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    createExtraReducer(builder, getEffectsThunk);
  },
});

/**
 * Selectors
 */
export const getEffects = (state: InitialStateDto) => state.data || null;
export const getLoading = (state: InitialStateDto) => getSliceLoadingState(state.loading);
