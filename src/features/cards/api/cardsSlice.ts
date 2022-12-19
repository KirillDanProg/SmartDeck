import {createSlice} from '@reduxjs/toolkit';
import {packsApi} from './packsApi';
import {cardsApi} from './cardsApi';
import {RootState} from '../../../app/store';


export type CreateNewCardRequestT = {
    cardsPack_id: string
    question?: string
    answer?: string
}

export type CreatedCardType = {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
}

export interface INewCardResponse {
    newCardsPack: CardResponseType;
    token: string;
    tokenDeathTime: number;
}

export interface IDeleteCardResponse {
    deletedCard: CardResponseType;
    token: string;
    tokenDeathTime: number;
}

export interface IChangeNameCardResponse {
    updatedCard: CardResponseType;
    token: string;
    tokenDeathTime: number;
}

export interface IChangeNameCardRequest {
    _id: string
    question: string
}

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
    packUserId: '5eb6a2f72f849402d46c6ac7'
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addMatcher(cardsApi.endpoints.getCards.matchFulfilled,
                (state, {payload}) => {
                    const {cards} = payload
                    state.cards = cards
                    state.packUserId = payload.packUserId
                }
            )
            .addMatcher(cardsApi.endpoints.createNewCard.matchFulfilled,
                (state, {payload}) => {

                })
            .addMatcher(cardsApi.endpoints.deleteCard.matchFulfilled,
                (state, {payload}) => {

                })
            .addMatcher(cardsApi.endpoints.changeCardName.matchFulfilled,
                (state, {payload}) => {

                })
    }
})

export const selectCardsPackID = (state: RootState) => state.cards.packUserId;