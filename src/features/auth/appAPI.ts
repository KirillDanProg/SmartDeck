import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {baseUrlGeneration} from "../../app/utils/baseUrlGeneration";
import {apiSlice} from "../api/apiSlice";
import {resetPasswordHTMLGeneration} from "../../app/utils/resetPasswordHTMLGeneration";
// import {
//     ILoginRequest,
//     IMainLoginResponse,
//     IRegisterRequest,
//     IRegisterResponse,
//     IResetPasswordData,
//     IUser
// } from "./authModels";
export interface IRegisterResponse {
    addedUser: IUser
}
export interface IUser {
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

export interface ILoginResponse {
    createdUserSession: IMainLoginResponse
}

export interface IMainLoginResponse {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
    name: string
    verified: boolean
    publicCardPacksCount: number
    created: string
    updated: string
    __v: number
    token: string
    tokenDeathTime: number
}

export interface IRegisterRequest {
    email: string
    password: string
}

export interface ILoginRequest {
    email: string
    password: string
    rememberMe: boolean
}

export const authAPI = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrlGeneration(),
    }),
    endpoints: (build) => ({
        register: build.mutation<IUser, IRegisterRequest>({
            query: (body) => ({
                url: `auth/register`,
                method: 'POST',
                body: body
            }),
            transformResponse: (response: IRegisterResponse) => response.addedUser
        }),
        logout: build.mutation< ILogoOutResponse, string>({
            query: () => ({
                url: `auth/me`,
                method: 'DELETE'
            })
        }),
        login: build.mutation<IMainLoginResponse, ILoginRequest>({
            query: (body) => ({
                url: `auth/login`,
                method: 'POST',
                body: body
            }),
            // transformResponse: (response: ILoginResponse) => response.createdUserSession
        }),
        changeName: build.mutation<any, string>({
            query: (body) => ({
                url: `/auth/me`,
                method: 'PUT',
                body
            }),
        }),
        forgotPassword: build.mutation<any, string>({
            query: (body) => ({
                url: `/auth/forgot`,
                method: 'POST',
                body: {
                    email: body,
                    from: "test-front-admin <ai73a@yandex.by>",
                    // можно указать разработчика фронта
                    message: `<div style="background-color: lime; padding: 15px">
                        password recovery link: 
                    <a href='http://localhost:3000/#/set-new-password/$token$'>
                    link</a>
                    </div>`
                }
            }),
            // transformResponse: (response: ILoginResponse) => response.createdUserSession
        }),
    })
})

// export const {
//     useRegisterMutation, useLogoutMutation,
//     useLoginMutation, useChangeNameMutation,
//     useForgotPasswordMutation
// } = appAPI
//

export const {useRegisterMutation, useLogoutMutation,useLoginMutation} = authAPI

// export const authAPI = apiSlice.injectEndpoints({
//     endpoints: (build) => ({
//         register: build.mutation<IUser, IRegisterRequest>({
//             query: (body) => ({
//                 url: `auth/register`,
//                 method: 'POST',
//                 body: body
//             }),
//             transformResponse: (response: IRegisterResponse) => response.addedUser
//         }),
//         logout: build.mutation({
//             query: (token: string) => ({
//                 url: `auth/me`,
//                 method: 'DELETE'
//             })
//         }),
//         login: build.mutation<IMainLoginResponse, ILoginRequest>({
//             query: (body) => ({
//                 url: `auth/login`,
//                 method: 'POST',
//                 body
//             }),
//         }),
//         authMe: build.mutation({
//             query: (token: string) => ({
//                 url: "auth/me",
//                 method: "POST",
//                 body: {token}
//             }),
//             // transformResponse: (response: ) =IRegisterResponse> response.addedUser
//         }),
//         setNewPassword: build.mutation({
//             query: (resetData: IResetPasswordData) => ({
//                 url: "auth/set-new-password",
//                 method: "POST",
//                 body: resetData
//             })
//         }),
//         resetPassword: build.mutation({
//             query: (email: string) => ({
//                 url: "auth/forgot",
//                 method: "POST",
//                 body: {
//                     email,
//                     from: "test-front-admin <ai73a@yandex.by>",
//                     message: resetPasswordHTMLGeneration()
//                 }
//             })
//         })
//     })
// });
//
// export const {
//     useRegisterMutation,
//     useLogoutMutation,
//     useLoginMutation,
//     useAuthMeMutation,
//     useResetPasswordMutation,
//     useSetNewPasswordMutation
// } = authAPI