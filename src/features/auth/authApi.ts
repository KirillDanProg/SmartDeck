import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {baseUrlGeneration} from "../../app/utils/baseUrlGeneration";

export interface RegisterResponse {
    _id: string;
    email: string;
    rememberMe: boolean;
    isAdmin: boolean;
    name: string;
    verified: boolean;
    publicCardPacksCount: number;
    created: Date;
    updated: Date;
    __v: number;
}

export interface RegisterRequest {
    email: string
    password: string
}


export const authAPI = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrlGeneration(),
    }),
    endpoints: (build) => ({
        register: build.mutation<RegisterResponse, RegisterRequest>({
            query: (body) => ({
                url: `auth/register`,
                method: 'POST',
                body: body
            })
        }),
        logout: build.mutation(({
            query: (token: string) => ({
                url: `auth/me`,
                method: 'DELETE'
            })
        }))
    })
})

export const {useRegisterMutation, useLogoutMutation} = authAPI