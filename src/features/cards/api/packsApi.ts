import {apiSlice} from "../../api/apiSlice";
import {
    IChangeNameResponse,
    IRegisterResponse,
} from "../../auth/authApi";
import {
    CreateNewPackRequestT, IChangeNamePackRequest,
    IChangeNamePackResponse,
    IDeletePackResponse,
    IGetPacksResponse,
    INewPackResponse
} from "./packsSlice";

export const packsApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getPacks: build.query<IGetPacksResponse, void>({
            query: () => ({
                url: `/cards/pack`,
            }),
            providesTags: result => [{type: "Packs"}]
        }),
        createNewPack: build.mutation<INewPackResponse, string>({
            query: (body) => ({
                url: `/cards/pack`,
                method: 'POST',
                body: {
                    cardsPack: {
                        name: body,
                        private: false
                    }
                }
            }),
            invalidatesTags: result =>  [{type: "Packs"}]
        }),
        deletePack: build.mutation<IDeletePackResponse, string>({
            query: (body) => ({
                url: `/cards/pack?id=${body}`,
                method: 'DELETE',
            }),
            invalidatesTags: result =>  [{type: "Packs"}]
        }),
        changeNamePack: build.mutation<IChangeNamePackResponse, IChangeNamePackRequest>({
            query: (body) => ({
                url: `/cards/pack`,
                method: 'PUT',
                body: {
                    cardsPack: {
                        name: body.name,
                        _id: body._id,
                    }
                }
            }),
            invalidatesTags: result =>  [{type: "Packs"}]
        }),
    }),
});


export const {useGetPacksQuery, useCreateNewPackMutation, useDeletePackMutation, useChangeNamePackMutation} = packsApi