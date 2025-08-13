import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { albumsSlice } from 'store/slices/albums';
import { authorsSlice } from 'store/slices/authors';
import { categoriesSlice } from 'store/slices/categories';
import { configsSlice } from 'store/slices/configs';
import { effectsSlice } from 'store/slices/effects';
import { musicsSlice } from 'store/slices/musics';
import { padsSlice } from 'store/slices/pads';

export const reducer = combineReducers({
  configs: configsSlice.reducer,
  authors: authorsSlice.reducer,
  albums: albumsSlice.reducer,
  categories: categoriesSlice.reducer,
  effects: effectsSlice.reducer,
  musics: musicsSlice.reducer,
  pads: padsSlice.reducer
});

const store = configureStore({
  reducer
});

export default store;
