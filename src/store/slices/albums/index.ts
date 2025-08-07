import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { StoreLoadingEnum } from 'store/types/store';
import { AlbumDto, InitialStateDto } from './types';
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
export const getAlbumsThunk = createAsyncThunk<AlbumDto[]>('albums/get', async () => {
  const response = await api.query();
  return response.data;
});

/**
 * Slices
 */

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: {
    // get file
    [`${getAlbumsThunk.pending}`]: (state) => {
      state.loading = StoreLoadingEnum.pending;
    },
    [`${getAlbumsThunk.fulfilled}`]: (state, action) => {
      state.loading = StoreLoadingEnum.loaded;
      state.data = _.unionBy(state.data || [], action.payload, 'id');
    },
    [`${getAlbumsThunk.rejected}`]: (state) => {
      state.loading = StoreLoadingEnum.loaded;
    }
  }
});

/**
 * Selectors
 */
export const getAlbums = (state: InitialStateDto): AlbumDto[] | null => state.data || null;
export const getAlbumsIsLoading = (state: InitialStateDto): boolean => state.loading === StoreLoadingEnum.pending;
