import { AuthorDto } from 'store/slices/authors/types';
import { InitialState } from '../../types/store';

export interface AlbumDto {
  id: number;
  name: string;
  description: string;
  image: string;
  authors: AuthorDto[];
}
export type InitialStateDto = InitialState<AlbumDto[] | null>;
