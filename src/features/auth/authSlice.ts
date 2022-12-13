import { createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {authAPI} from "./authAPI";

type StatusType = "idle" | "loading" | "succeeded" | "failed"
type InitialStateType = {
    token: string | null
    userId: string | null
    status: StatusType
    error: SerializedError | null
}
type SerializedError = {
    name?: string
    message?: string
    code?: string
    stack?: string
}

const initialState: InitialStateType = {
    token: null,
    userId: null,
    status: "idle",
    error: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            //login
            .addMatcher(authAPI.endpoints.login.matchPending,
                (state) => {
                    state.status = "loading"
                    state.error = null
                }
            )
            .addMatcher(authAPI.endpoints.login.matchFulfilled,
                (state, {payload}) => {
                    const {_id, token} = payload
                    state.status = "succeeded"
                    state.error = null
                    state.token = token
                    state.userId = _id
                }
            )
            .addMatcher(authAPI.endpoints.login.matchRejected,
                (state, payload) => {
                    state.status = "failed"
                    state.error = payload.error
                }
            )
            //logout
            .addMatcher(authAPI.endpoints.logout.matchRejected,
                (state, payload) => {
                    state.status = "failed"
                    state.error = payload.error
                }
            )
            .addMatcher(authAPI.endpoints.logout.matchFulfilled,
                (state) => {
                    state.status = "succeeded"
                    state.userId = null
                    state.token = null
                }
            )
    }
})

export const selectCurrentUser = (state: RootState) => state.auth.userId;
export const selectToken = (state: RootState) => state.auth.token;
export const selectCurrentError = (state: RootState) => state.auth.error