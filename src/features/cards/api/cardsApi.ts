import {apiSlice} from '../../api/apiSlice';
import {IGetCardsResponse} from './cardsSlice';

export const cardsApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getCards: build.query<IGetCardsResponse, void>({
            query: () => ({
                url: `/cards/card`,
            }),
            // providesTags: result => [{type: "Cards"}]
        }),
        // createNewPack: build.mutation<{}, string>({
        //     query: (body) => ({
        //         url: `/cards/pack`,
        //         method: 'POST',
        //         body: {
        //             cardsPack: {
        //                 name: body,
        //                 private: false
        //             }
        //         }
        //     }),
        //     invalidatesTags: result =>  [{type: "Packs"}]
        // }),
        // deletePack: build.mutation<{}, string>({
        //     query: (body) => ({
        //         url: `/cards/pack?id=${body}`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags: result =>  [{type: "Packs"}]
        // }),
        // changeNamePack: build.mutation<IChangeNamePackResponse, IChangeNamePackRequest>({
        //     query: (body) => ({
        //         url: `/cards/pack`,
        //         method: 'PUT',
        //         body: {
        //             cardsPack: {
        //                 name: body.name,
        //                 _id: body._id,
        //             }
        //         }
        //     }),
        //     invalidatesTags: result =>  [{type: "Packs"}]
        // }),
    }),
});


export const {useGetCardsQuery} = cardsApi;