import { InitialState } from 'store/types';

export interface PadDto {
  id: number;
  name: string;
}

export type InitialStateDto = InitialState<PadDto[] | null>;
