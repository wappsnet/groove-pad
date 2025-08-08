import { InitialState } from "store/types";

export enum LanguagesEnum {
  En = "en",
}

export interface TipDto {
  uri: string;
  id: string;
}

export interface ContactsDto {
  address: string;
  phone: string;
  email: string;
}

export interface MenuItemDto {
  name: string;
  route: string;
  icon: string;
}

export type ConfigsDto = {
  language: LanguagesEnum;
  tips: TipDto[];
  contacts: ContactsDto;
};

export type InitialStateDto = InitialState<ConfigsDto | null>;
