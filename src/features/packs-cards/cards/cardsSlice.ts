import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {cardsApi} from "./cardsApi";
import {RootState} from "../../../app/store";

export type CreateNewCardRequestT = {
  cardsPack_id: string;
  question?: string;
  answer?: string;
};

//todo: remove unused types

// export interface IGetCardRequest {
//   cardAnswer?: string;
//   cardQuestion?: string;
//   cardsPack_id: string;
//   min?: string;
//   max?: string;
//   sortCards?: string;
//   page?: string;
//   pageCount?: string;
// }

export interface IChangeNameCardResponse {
  updatedCard: CardType;
  token: string;
  tokenDeathTime: number;
}

export interface IChangeNameCardRequest {
  _id: string;
  question: string;
  answer: string;
}

export interface IGetCardsResponse {
  cards: CardType[];
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: string;
  status: "loading" | "failed" | "succeeded";
  error: null | string;
  packCreated: string;
  packName: string;
}

export type CardType = {
  answer: string;
  question: string;
  cardsPack_id: string;
  grade: number;
  shots: number;
  user_id: string;
  created: string;
  updated: string;
  _id: string;
};

type InitialStateType = IGetCardsResponse & {
  currentCard: CardType | null;
};

//todo: fix initial state
const initialState: InitialStateType = {
  cards: [] as CardType[],
  currentCard: {} as CardType,
  cardsTotalCount: 3,
  maxGrade: 4,
  minGrade: 1,
  page: 1,
  pageCount: 4,
  packUserId: "",
  status: "loading",
  error: null,
  packCreated: "",
  packName: ""
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCurrentCard: (state, action: PayloadAction<CardType | null>) => {
      state.currentCard = action.payload;
    },
    setCards: (state, action: PayloadAction<CardType[]>) => {
      state.cards = action.payload;
    },
    removeCard: (state, action: PayloadAction<string>) => {
      const card = state.cards.find((c) => c._id === action.payload);
      if (card) {
        const index = state.cards.indexOf(card);
        state.cards.splice(index, 1);
      }
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      cardsApi.endpoints.getCards.matchFulfilled,
      (state, {payload}) => {
        const {cards} = payload;
        state.cards = cards;
        state.packUserId = payload.packUserId;
      }
    );
  }
});

export const {setCurrentCard, removeCard, setCards} = cardsSlice.actions;

export const selectCurrentCard = (state: RootState) => state.cards.currentCard;
export const selectCards = (state: RootState) => state.cards.cards;
