import { IResetPasswordData } from "./authModels";
import { apiSlice } from "app/api/apiSlice";
import { resetPasswordHTMLGeneration } from "common/utils";

export interface IRegisterResponse {
    addedUser: UserType;
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

export type UpdatedUserType = {
  updatedUser: UserType & { avatar: string | null }
}
export type UserType = Omit<AuthResponseType,
  "token" |
  "tokenDeathTime">

export interface IRegisterRequest {
  email: string;
  password: string;
}

export type ILoginRequest  = IRegisterRequest & {
  rememberMe: boolean;
}

export interface IGeneralResponse {
  info: string;
  error: string;
}

export const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<UserType, IRegisterRequest>({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body: body
      }),
      transformResponse: (response: IRegisterResponse) => response.addedUser
    }),
    logout: build.mutation<IGeneralResponse, void>({
      query: () => ({
        url: "auth/me",
        method: "DELETE"
      })
    }),
    login: build.mutation<AuthResponseType, ILoginRequest>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body
      })
    }),
    authMe: build.mutation<AuthResponseType, string>({
      query: (token: string) => ({
        url: "auth/me",
        method: "POST",
        body: { token }
      })
    }),
    setNewPassword: build.mutation<IGeneralResponse, IResetPasswordData>({
      query: (resetData) => ({
        url: "auth/set-new-password",
        method: "POST",
        body: resetData
      })
    }),
    changeName: build.mutation<UserType, string>({
      query: (body) => ({
        url: "/auth/me",
        method: "PUT",
        body: {
          name: body,
          avatar: ""
        }
      }),
      transformResponse: (response: UpdatedUserType) => response.updatedUser
    }),
    forgotPassword: build.mutation<IGeneralResponse, string>({
      query: (body) => ({
        url: "/auth/forgot",
        method: "POST",
        body: {
          email: body,
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
  useSetNewPasswordMutation,
  useChangeNameMutation,
  useForgotPasswordMutation
} = authApi;