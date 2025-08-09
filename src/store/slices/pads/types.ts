import { InitialState } from 'store/types';

export interface PadDto {
  id: string;
  title: string;
  icon: '';
  sound: '';
}

export type InitialStateDto = InitialState<PadDto[] | null>;
