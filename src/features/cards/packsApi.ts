import {
  IChangeNamePackRequest,
  IChangeNamePackResponse,
  IGetPacksResponse,
} from './packsSlice';
import {apiSlice} from '../../app/api/apiSlice';
import { ParamsType } from "../../common/utils/getUrlParams";

export type QueryParams = {
    packName?: string
    min?: string
    max?: string
    sortPacks?: string
    page?: string
    pageCount?: string
    user_id?: string
}

export type CreateNewPackRequestType = {
  name: string,
  privateValue: boolean,
}
export const packsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPacks: build.query<IGetPacksResponse, ParamsType>({
      query: (params) => ({
        url: '/cards/pack',
        params
      }),
      providesTags: result => [{type: 'Packs'}]
    }),
    createNewPack: build.mutation<{}, CreateNewPackRequestType>({
      query: (body) => ({
        url: '/cards/pack',
        method: 'POST',
        body: {
          cardsPack: {
            name: body.name,
            private: body.privateValue,
          }
        }
      }),
      invalidatesTags: () =>  [{type: 'Packs'}]
    }),
    deletePack: build.mutation<{}, string>({
      query: (body) => ({
        url: `/cards/pack?id=${body}`,
        method: 'DELETE',
      }),
      invalidatesTags: result =>  [{type: 'Packs'}]
    }),
    changeNamePack: build.mutation<IChangeNamePackResponse, IChangeNamePackRequest>({
      query: (body) => ({
        url: '/cards/pack',
        method: 'PUT',
        body: {
          cardsPack: {
            name: body.name,
            _id: body._id,
          }
        }
      }),
      invalidatesTags: () =>  [{type: 'Packs'}]
    }),
  }),
});


export const {useGetPacksQuery,
  useCreateNewPackMutation,
  useDeletePackMutation,
  useChangeNamePackMutation} = packsApi