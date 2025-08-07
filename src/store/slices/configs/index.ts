import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { StoreLoadingEnum } from 'store/types/store';
import { LanguagesEnum, ConfigsDto, TipDto, InitialStateDto } from './types';
import api from './api';
import configs from 'assets/mocks/configs';

/**
 * Initial State
 */
const initialState: InitialStateDto = {
  loading: StoreLoadingEnum.idle,
  error: null,
  data: configs
};

/**
 * Async Actions
 */
export const getConfigsThunk = createAsyncThunk<ConfigsDto>('configs/get', async (_, thunkApi) => {
  try {
    const response = await api.get();
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

/**
 * Slices
 */
export const configsSlice = createSlice({
  name: 'configs',
  initialState,
  reducers: {},
  extraReducers: {
    // get file
    [`${getConfigsThunk.pending}`]: (state) => {
      state.loading = StoreLoadingEnum.pending;
    },
    [`${getConfigsThunk.fulfilled}`]: (state, action) => {
      state.loading = StoreLoadingEnum.loaded;
      state.data = action.payload;
    },
    [`${getConfigsThunk.rejected}`]: (state) => {
      state.loading = StoreLoadingEnum.loaded;
    }
  }
});

/**
 * Selectors
 */
export const getConfigs = (state: InitialStateDto): ConfigsDto | null => state.data || null;
export const getTips = (state: InitialStateDto): TipDto[] | null => state.data?.tips || null;
export const getLanguage = (state: InitialStateDto): LanguagesEnum => state.data?.language || LanguagesEnum.En;
export const getConfigsLoading = (state: InitialStateDto): boolean => state.loading === StoreLoadingEnum.pending;
