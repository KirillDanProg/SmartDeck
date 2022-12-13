import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {authAPI} from "./authAPI";
import {removeFromLocalStorage, saveToLocalStorage} from "../../app/utils/local-storage";

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
    status: "loading",
    error: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addMatcher<string>(authAPI.endpoints.authMe.matchRejected,
                (state, {payload}) => {
                    state.error = payload?.data.error
                    state.status = "failed"
                }
            )
            .addMatcher(authAPI.endpoints.authMe.matchFulfilled,
                (state, {payload}) => {
                    const {_id, token} = payload
                    if (_id && token) {
                        state.token = token
                        state.userId = _id
                        state.status = "succeeded"
                    }
                }
            )
            //register
            .addMatcher(authAPI.endpoints.register.matchFulfilled,
                (state) => {
                    state.status = "succeeded"
                    state.error = null
                }
            )
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
                    saveToLocalStorage("id", _id)
                    saveToLocalStorage("token", token)
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
                    removeFromLocalStorage("id")
                    removeFromLocalStorage("token")
                }
            )
    }
})

export const selectCurrentUser = (state: RootState) => state.auth.userId;
export const selectToken = (state: RootState) => state.auth.token;
export const selectCurrentError = (state: RootState) => state.auth.error
export const selectCurrentStatus = (state: RootState) => state.auth.status