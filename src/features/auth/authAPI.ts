import {apiSlice} from "../api/apiSlice";
import {resetPasswordPageGen} from "../../app/utils/resetPasswordPageGen";

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
            query: (resetData: IResetPasswordData) => ({
                url: "auth/set-new-password",
                method: "POST",
                body: resetData
            })
        }),
        resetPassword: build.mutation({
            query: (email: string) => ({
                url: "auth/forgot",
                method: "POST",
                body: {
                    email,
                    from: "test-front-admin <ai73a@yandex.by>",
                    message: resetPasswordPageGen()
                }
            })
        })
    })
});

export const {
    useRegisterMutation,
    useLogoutMutation,
    useLoginMutation,
    useAuthMeMutation,
    useResetPasswordMutation,
    useSetNewPasswordMutation
} = authAPI