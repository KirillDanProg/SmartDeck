import {apiSlice} from '../../../app/api/apiSlice';
import {IChangeNameCardRequest, IChangeNameCardResponse, IGetCardsResponse} from './cardsSlice';

type ParamsType = {
    page?: string
    pageCount?: string
    cardsPack_id?: string
    sortCards?: string;
    packName?: string
    min?: string
    max?: string
    user_id?: string
}

export const cardsApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getCards: build.query<IGetCardsResponse, ParamsType>({
            query: (params) => ({
                url: `/cards/card`,
                params
            }),
            providesTags: result => [{type: 'Cards'}]
        }),
        //todo: fix any type
        createNewCard: build.mutation<{}, any>({
            query: (body) => ({
                url: `/cards/card`,
                method: 'POST',
                body: {
                    card: {
                        cardsPack_id: body.cardsPack_id,
                        question: body.question,
                        answer: body.answer
                    }
                }
            }),
            invalidatesTags: result => [{type: 'Cards'}]
        }),
        deleteCard: build.mutation<{}, string>({
            query: (body) => ({
                url: `/cards/card?id=${body}`,
                method: 'DELETE',
            }),
            invalidatesTags: result => [{type: 'Cards'}]
        }),
        changeCardName: build.mutation<IChangeNameCardResponse, IChangeNameCardRequest>({
            query: (body) => ({
                url: `/cards/card`,
                method: 'PUT',
                body: {
                    card: {
                        _id: body._id,
                        question: body.question
                    }
                }
            }),
            invalidatesTags: result => [{type: 'Cards'}]
        }),
    }),
});


export const {
    useGetCardsQuery,
    useCreateNewCardMutation,
    useDeleteCardMutation,
    useChangeCardNameMutation
} = cardsApi;