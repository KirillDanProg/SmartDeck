import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {baseUrlGeneration} from "../../app/utils/baseUrlGeneration";


export const profileAPI = createApi({
    reducerPath: "profileApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrlGeneration(),
    }),
    endpoints: (build) => ({
        changeName: build.mutation({
            query: (body) => ({
                url: `/auth/me`,
                method: 'PUT',
                body
            }),
        }),
    })
})

export const {} = profileAPI