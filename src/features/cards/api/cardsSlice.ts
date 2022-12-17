import {createSlice} from "@reduxjs/toolkit";
import {packsApi} from "./packsApi";
import {cardsApi} from './cardsApi';


// export type CreateNewPackRequestT = {
//     cardsPack: {
//         name?: string,
//         private?: boolean
//     }
// }

// export type CreatePackCardType = {
//     name?: string
//     deckCover?: string
//     private?: boolean | string
// }
//
// export interface INewPackResponse {
//     newCardsPack: PackResponseType;
//     token: string;
//     tokenDeathTime: number;
// }
//
// export interface IDeletePackResponse {
//     deletedCardsPack: PackResponseType;
//     token: string;
//     tokenDeathTime: number;
// }
//
// export interface IChangeNamePackResponse {
//     updatedCardsPack: PackResponseType;
//     token: string;
//     tokenDeathTime: number;
// }
//
// export interface IChangeNamePackRequest {
//     _id: string,
//     name: string
// }

export interface IGetCardsResponse {
    cards: CardResponseType[];
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

export type CardResponseType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
}


const initialState: IGetCardsResponse = {
    cards: [] as CardResponseType[],
    cardsTotalCount: 3,
    maxGrade: 4,
    minGrade: 1,
    page: 1,
    pageCount: 4,
    packUserId: 'initialID'
}

export const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addMatcher(cardsApi.endpoints.getCards.matchFulfilled,
                (state, {payload}) => {
                    const {cards} = payload
                    state.cards = cards
                }
            )
        // .addMatcher(packsApi.endpoints.createNewPack.matchFulfilled,
        //     (state, {payload}) => {
        //             // state.cardPacks.push(payload.newCardsPack)
        //     })
    }
})

