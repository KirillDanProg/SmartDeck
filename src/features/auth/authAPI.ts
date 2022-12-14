import {apiSlice} from "../api/apiSlice";
import {resetPasswordHTMLGeneration} from "../../app/utils/resetPasswordHTMLGeneration";
import {
    ILoginRequest,
    IMainLoginResponse,
    IRegisterRequest,
    IRegisterResponse,
    IResetPasswordData,
    IUser
} from "./authModels";

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