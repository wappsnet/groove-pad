import { Dispatch } from '@reduxjs/toolkit';

export interface MKApiError {
  code?: number | string;
  message?: string;
}

export interface AsyncThunkConfig {
  rejectValue: MKApiError;
  state?: unknown;
  dispatch?: Dispatch;
  extra?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
}

export enum StoreLoadingEnum {
  idle = 'idle',
  pending = 'pending',
  loaded = 'loaded',
}

export interface InitialState<D = unknown, L = StoreLoadingEnum, E = MKApiError> {
  loading: L;
  error: E | null;
  data: D;
  request?: Record<string, string>;
}
