import {createSlice} from "@reduxjs/toolkit";

export interface IChangeNamePackResponse {
  updatedCardsPack: PackResponseType;
  token: string;
  tokenDeathTime: number;
}

export interface IChangeNamePackRequest {
  _id: string;
  name: string;
}

export interface IGetPacksResponse {
  cardPacks: PackResponseType[];
  page: number;
  pageCount: number;
  cardPacksTotalCount: number;
  minCardsCount: number;
  maxCardsCount: number;
  token: string;
  tokenDeathTime: number;
}

export type PackResponseType = {
  _id: string;
  user_id: string;
  user_name: string;
  private: boolean;
  name: string;
  path: string;
  grade: number;
  shots: number;
  deckCover: string;
  cardsCount: number;
  type: string;
  rating: number;
  created: string;
  updated: string;
  more_id: string;
  __v: number;
};

const initialState: IGetPacksResponse = {
  cardPacks: [] as PackResponseType[],
  page: 2,
  pageCount: 20,
  cardPacksTotalCount: 1,
  minCardsCount: 1,
  maxCardsCount: 15,
  token: "",
  tokenDeathTime: 1
};

export const packsSlice = createSlice({
  name: "packs",
  initialState,
  reducers: {}
});
