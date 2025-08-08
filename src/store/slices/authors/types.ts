import { InitialState } from "../../types";

export interface AuthorDto {
  id: number;
  name: string;
  description: string;
}

export type InitialStateDto = InitialState<AuthorDto[] | null>;
