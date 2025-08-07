export enum StoreLoadingEnum {
  idle = 'idle',
  pending = 'pending',
  loaded = 'loaded'
}

export interface InitialState<T> {
  loading: StoreLoadingEnum;
  error: Error | null;
  data: T;
}

export interface Error {
  status: number;
  message: string;
}
