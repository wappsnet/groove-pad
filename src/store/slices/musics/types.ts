import { AuthorDto } from "store/slices/authors/types";

import { InitialState } from "../../types";
import { AlbumDto } from "../albums/types";
import { CategoryDto } from "../categories/types";

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
