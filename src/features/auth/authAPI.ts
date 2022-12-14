import {apiSlice} from "../api/apiSlice";

export interface IRegisterResponse {
    addedUser: IUser
}

export interface IResetPasswordData {
    password: string
    resetPasswordToken: string
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

export const authAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        register: build.mutation<IUser, IRegisterRequest>({
            query: (body) => ({
                url: `auth/register`,
                method: 'POST',
                body: body
            }),
            transformResponse: (response: IRegisterResponse) => response.addedUser
        }),
        logout: build.mutation({
            query: (token: string) => ({
                url: `auth/me`,
                method: 'DELETE'
            })
        }),
        login: build.mutation<IMainLoginResponse, ILoginRequest>({
            query: (body) => ({
                url: `auth/login`,
                method: 'POST',
                body
            }),
        }),
        authMe: build.mutation({
            query: (token: string) => ({
                url: "auth/me",
                method: "POST",
                body: {token}
            })
        }),
        setNewPassword: build.mutation({
            query: (resetData: string) => ({
                url: "auth/set-new-password",
                method: "POST",
                body: {
                    password: "qwer1234",
                    resetPasswordToken: "e3df2fc0-7b23-11ed-8a8b-218216d7f0d3"
                }
            })
        }),
//         resetPassword: build.mutation({
//             query: (email: string) => ({
//                 url: "auth/set-new-password",
//                 method: "POST",
//                 body: {
//                     email,
//                     from: "test-front-admin <ai73a@yandex.by>",
//                     message: `<div style="background-color: lime; padding: 15px">
// password recovery link:
// <a href='http://localhost:3000/set-new-password/$token$'>
// link</a>
// </div>`
//                 }
//             })
//         })

    })
});

export const {
    useRegisterMutation,
    useLogoutMutation,
    useLoginMutation,
    useAuthMeMutation,
    // useResetPasswordMutation,
    useSetNewPasswordMutation
} = authAPI