import { InitialState } from "../../types";

export interface CategoryDto {
  id: number;
  name: string;
  description: string;
  image: string;
}

export type InitialStateDto = InitialState<CategoryDto[] | null>;
