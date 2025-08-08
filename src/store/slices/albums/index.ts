import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MKApiError, StoreLoadingEnum } from 'store/types';
import { createApiError, createExtraReducer, getSliceLoadingState } from 'store/helpers';
import { AlbumDto, InitialStateDto } from './types';
import { AlbumsApi } from './api';

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
export const getAlbumsThunk = createAsyncThunk<AlbumDto[], void, { rejectValue: MKApiError }>(
  'albums/get',
  async (_, thunkAPI) => {
    try {
      const response = await AlbumsApi.query();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(createApiError(e));
    }
  },
);

/**
 * Slices
 */

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    createExtraReducer(builder, getAlbumsThunk, {
      fulfilled: (state, action) => {
        state.data = action.payload;
      },
    });
  },
});

/**
 * Selectors
 */
export const getAlbums = (state: InitialStateDto) => state.data || null;
export const getAlbumsIsLoading = (state: InitialStateDto) => getSliceLoadingState(state.loading);
