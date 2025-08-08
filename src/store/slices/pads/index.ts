import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MKApiError, StoreLoadingEnum } from 'store/types';
import { createApiError, createExtraReducer, getSliceLoadingState } from 'store/helpers';
import { InitialStateDto, PadDto } from './types';
import { PadsApi } from './api';

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
export const getPadsThunk = createAsyncThunk<PadDto[], void, { rejectValue: MKApiError }>(
  'pads/query',
  async (_, thunkAPI) => {
    try {
      const response = await PadsApi.query();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(createApiError(e));
    }
  },
);

/**
 * Slices
 */

export const padsSlice = createSlice({
  name: 'pads',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    createExtraReducer(builder, getPadsThunk);
  },
});

/**
 * Selectors
 */
export const getPads = (state: InitialStateDto) => state.data || null;
export const getPadsIsLoading = (state: InitialStateDto) => getSliceLoadingState(state.loading);
