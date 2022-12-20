import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "../../app/store";
import {baseUrlGeneration} from '../../common/utils/baseUrlGeneration';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
            baseUrl: baseUrlGeneration(),
            credentials: "include",
            prepareHeaders: (headers, {getState}) => {
                const token = (getState() as RootState).auth.token;
                if (token) {
                    headers.set("token", `${token}`);
                }
                return headers;
            }
        }
    ),
    tagTypes: ["Packs","Cards"],
    endpoints: () => ({}),
})

