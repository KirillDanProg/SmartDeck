import {apiSlice} from "../api/apiSlice";
import {resetPasswordHTMLGeneration} from "../../app/utils/resetPasswordHTMLGeneration";
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
            }),
            // transformResponse: (response: ) =IRegisterResponse> response.addedUser
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
                    message: resetPasswordHTMLGeneration()
                }
            })
        }),
        changeName: build.mutation<any, string>({
            query: (body) => ({
                url: `/auth/me`,
                method: 'PUT',
                body: {
                    name: body,
                    avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdcextendeduniverse.fandom.com%2Fwiki%2FBatman&psig=AOvVaw3gASjDZNovoMYEQhdrPdkr&ust=1671181845990000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPjnjtqj-_sCFQAAAAAdAAAAABAD"
                }
            }),
        }),
        forgotPassword: build.mutation<any, string>({
            query: (body) => ({
                url: `/auth/forgot`,
                method: 'POST',
                body: {
                    email: body,
                    from: "test-front-admin <ai73a@yandex.by>",
                    message: resetPasswordHTMLGeneration()
                }
            }),
            // transformResponse: (response: ILoginResponse) => response.createdUserSession
        }),
    })
});

export const {
    useRegisterMutation,
    useLogoutMutation,
    useLoginMutation,
    useAuthMeMutation,
    useResetPasswordMutation,
    useSetNewPasswordMutation,
    useChangeNameMutation,
    useForgotPasswordMutation
} = authApi