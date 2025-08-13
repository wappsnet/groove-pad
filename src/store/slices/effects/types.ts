import { CategoryDto } from "store/slices/categories/types";

import { InitialState } from "../../types";

export interface EffectDto {
  id: number;
  name: string;
  source: string;
  image: string;
  categories: CategoryDto[];
}

export type InitialStateDto = InitialState<EffectDto[] | null>;
