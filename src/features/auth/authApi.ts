import {apiSlice} from "../api/apiSlice";
import {resetPasswordHTMLGeneration} from "../../common/utils/resetPasswordHTMLGeneration";
import {IResetPasswordData} from "./authModels";

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

export interface IChangeNameResponse {
    updatedUser: IUser
    error?: string
}


export type AuthResponseType = {
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

export interface IGeneralResponse {
    info: string
    error: string
}

export const authApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        register: build.mutation<IUser, IRegisterRequest>({
            query: (body) => ({
                url: `auth/register`,
                method: 'POST',
                body: body
            }),
            transformResponse: (response: IRegisterResponse) => response.addedUser
        }),
        logout: build.mutation<IGeneralResponse, void>({
            query: () => ({
                url: `auth/me`,
                method: 'DELETE'
            })
        }),
        login: build.mutation<AuthResponseType, ILoginRequest>({
            query: (body) => ({
                url: `auth/login`,
                method: 'POST',
                body
            }),
        }),
        authMe: build.mutation<AuthResponseType, string>({
            query: (token: string) => ({
                url: "auth/me",
                method: "POST",
                body: {token}
            }),
        }),
        setNewPassword: build.mutation<IGeneralResponse,IResetPasswordData>({
            query: (resetData) => ({
                url: "auth/set-new-password",
                method: "POST",
                body: resetData
            })
        }),
        changeName: build.mutation<IChangeNameResponse, string>({
            query: (body) => ({
                url: `/auth/me`,
                method: 'PUT',
                body: {
                    name: body,
                    avatar: '',
                }
            }),
        }),
        forgotPassword: build.mutation<IGeneralResponse, string>({
            query: (body) => ({
                url: `/auth/forgot`,
                method: 'POST',
                body: {
                    email: body,
                    from: "test-front-admin <ai73a@yandex.by>",
                    message: resetPasswordHTMLGeneration()
                }
            }),
        }),
    })
});

export const {
    useRegisterMutation,
    useLogoutMutation,
    useLoginMutation,
    useAuthMeMutation,
    useSetNewPasswordMutation,
    useChangeNameMutation,
    useForgotPasswordMutation,
} = authApi;