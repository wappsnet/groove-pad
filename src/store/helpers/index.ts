import { AxiosError } from 'axios';
import { ActionReducerMapBuilder, AsyncThunk, Draft, PayloadAction } from '@reduxjs/toolkit';

import { AsyncThunkConfig, InitialState, StoreLoadingEnum } from 'store/types';

export const getSliceLoadingState = (loadingState: StoreLoadingEnum) => ({
  isIdle: loadingState === StoreLoadingEnum.idle,
  isPending: loadingState === StoreLoadingEnum.pending,
  isLoaded: loadingState === StoreLoadingEnum.loaded,
});

export const createApiError = (e: unknown) => {
  if (e instanceof AxiosError) {
    return {
      code: e?.response?.status ?? e?.code ?? 500,
      message: e?.response?.data?.message || e.message || 'Something goes wrong. Please try again',
    };
  }

  return {
    code: 500,
    message: 'Something goes wrong. Please try again',
  };
};

export const createExtraReducer = <S extends InitialState, T extends AsyncThunk<any, any, AsyncThunkConfig>>(
  builder: ActionReducerMapBuilder<S>,
  thunk: T,
  matchers?: {
    pending?: (
      state: Draft<S>,
      action: PayloadAction<
        ReturnType<T['pending']>['payload'],
        ReturnType<T['pending']>['type'],
        ReturnType<T['pending']>['meta']
      >,
    ) => void;
    fulfilled?: (
      state: Draft<S>,
      action: PayloadAction<
        ReturnType<T['fulfilled']>['payload'],
        ReturnType<T['fulfilled']>['type'],
        ReturnType<T['fulfilled']>['meta']
      >,
    ) => void;
    rejected?: (
      state: Draft<S>,
      action: PayloadAction<
        ReturnType<T['rejected']>['payload'],
        ReturnType<T['rejected']>['type'],
        ReturnType<T['rejected']>['meta']
      >,
    ) => void;
  },
) => {
  builder
    .addCase(thunk.pending, (state, action) => {
      const hash = JSON.stringify({
        prefix: thunk.typePrefix,
        args: action.meta.arg,
      });

      state.error = null;
      state.loading = StoreLoadingEnum.pending;

      if (!state.request) {
        state.request = {};
      }

      state.request[hash] = action.meta.requestId;

      if (matchers?.pending) {
        matchers.pending(state, action);
      }
    })
    .addCase(thunk.fulfilled, (state, action) => {
      const hash = JSON.stringify({
        prefix: thunk.typePrefix,
        args: action.meta.arg,
      });

      state.error = null;

      if (matchers?.fulfilled) {
        if (state.request?.[hash] === action.meta.requestId) {
          matchers.fulfilled(state, action);
        }
      } else if (state.request?.[hash] === action.meta.requestId) {
        if (action.payload || action.payload === 0) {
          state.data = action.payload;
        }
      }

      state.loading = StoreLoadingEnum.loaded;
    })
    .addCase(thunk.rejected, (state, action) => {
      state.error = action.payload || null;

      if (matchers?.rejected) {
        if (action.payload) {
          matchers.rejected(state, action);
        }
      }

      state.loading = StoreLoadingEnum.loaded;
    });
};
