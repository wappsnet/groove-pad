import { AuthorDto } from 'store/slices/authors/types';
import { AlbumDto } from '../albums/types';
import { CategoryDto } from '../categories/types';
import { InitialState } from '../../types/store';

export interface MusicDto {
  id: number;
  name: string;
  description: string;
  image: string;
  source: string;
  authors: AuthorDto[];
  albums: AlbumDto[];
  categories: CategoryDto[];
}

export type InitialStateDto = InitialState<MusicDto[] | null>;
