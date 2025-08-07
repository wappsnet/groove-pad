import { InitialState } from '../../types/store';

export interface AuthorDto {
  id: number;
  name: string;
  description: string;
}

export type InitialStateDto = InitialState<AuthorDto[] | null>;
