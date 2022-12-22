import {createSlice} from '@reduxjs/toolkit';
import {cardsApi} from './cardsApi';
import {RootState} from '../../../app/store';
import {GenericAsyncThunk} from '../../auth/authSlice';


export type CreateNewCardRequestT = {
    cardsPack_id: string
    question?: string
    answer?: string
}

export interface IGetCardRequest {
    cardAnswer?:string
    cardQuestion?:string
    cardsPack_id:string
    min?:string
    max?:string
    sortCards?:string
    page?:string
    pageCount?:string
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
    status:null | 'loading' | 'failed' | 'succeeded'
    error:null | string
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
    packUserId: '',
    status:null,
    error:null
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addMatcher(
                (action): action is GenericAsyncThunk => action.type.endsWith('/pending'),
                (state) => {
                    state.status = 'loading'
                    state.error = null
                }
            )
            .addMatcher(
                (action): action is GenericAsyncThunk => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.status = 'failed'
                    state.error = action.payload.data.error
                }
            )
            .addMatcher(
                (action): action is GenericAsyncThunk => action.type.endsWith('/fulfilled'),
                (state) => {
                    state.status = 'succeeded'
                    state.error = null
                }
            )
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