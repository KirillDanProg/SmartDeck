import {
  IChangeNamePackRequest,
  IChangeNamePackResponse,
  IGetPacksResponse,
} from './packsSlice';
import {apiSlice} from '../../app/api/apiSlice';
import { ParamsType } from "../../common/utils/getUrlParams";


export const packsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPacks: build.query<IGetPacksResponse, ParamsType>({
      query: (params) => ({
        url: '/cards/pack',
        params
      }),
      providesTags: result => [{type: 'Packs'}]
    }),
    createNewPack: build.mutation<{}, string>({
      query: (body) => ({
        url: '/cards/pack',
        method: 'POST',
        body: {
          cardsPack: {
            name: body,
            private: false
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