import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MKApiError, StoreLoadingEnum } from 'store/types';
import { LanguagesEnum, ConfigsDto, TipDto, InitialStateDto } from './types';
import { ConfigsApi } from './api';
import { createApiError, createExtraReducer } from 'store/helpers';
import configs from 'assets/mocks/configs';

/**
 * Initial State
 */
const initialState: InitialStateDto = {
  loading: StoreLoadingEnum.idle,
  error: null,
  data: configs,
};

/**
 * Async Actions
 */
export const getConfigsThunk = createAsyncThunk<ConfigsDto, void, { rejectValue: MKApiError }>(
  'configs/get',
  async (_, thunkApi) => {
    try {
      const response = await ConfigsApi.get();
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(createApiError(e));
    }
  },
);

/**
 * Slices
 */
export const configsSlice = createSlice({
  name: 'configs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    createExtraReducer(builder, getConfigsThunk);
  },
});

/**
 * Selectors
 */
export const getConfigs = (state: InitialStateDto): ConfigsDto | null => state.data || null;
export const getTips = (state: InitialStateDto): TipDto[] | null => state.data?.tips || null;
export const getLanguage = (state: InitialStateDto): LanguagesEnum => state.data?.language || LanguagesEnum.En;
export const getConfigsLoading = (state: InitialStateDto): boolean => state.loading === StoreLoadingEnum.pending;
