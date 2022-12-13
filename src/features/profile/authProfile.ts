import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {baseUrlGeneration} from "../../app/utils/baseUrlGeneration";


export const profileAPI = createApi({
    reducerPath: "profileApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrlGeneration(),
    }),
    endpoints: (build) => ({
        // register: build.mutation<IUser, IRegisterRequest>({
        //     query: (body) => ({
        //         url: `auth/register`,
        //         method: 'POST',
        //         body: body
        //     }),
        //     transformResponse: (response: IRegisterResponse) => response.addedUser
        // }),
    })
})

export const {} = profileAPI