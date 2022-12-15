import {AsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {removeFromLocalStorage, saveToLocalStorage} from "../../app/utils/local-storage";
import {authApi} from "./authApi";

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
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

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
            .addMatcher(
                (action): action is GenericAsyncThunk => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.status = "failed"
                    state.error = action.payload.error
                }
            )
            .addMatcher(
                (action): action is GenericAsyncThunk => action.type.endsWith('/fulfilled'),
                (state) => {
                    state.status = "succeeded"
                    state.error = null
                }
            )
            .addMatcher(authApi.endpoints.authMe.matchFulfilled,
                (state, {payload}) => {
                    const {_id, token} = payload
                    if (_id && token) {
                        state.token = token
                        state.userId = _id
                        state.status = "succeeded"
                    }
                }
            )
            //login
            .addMatcher(authApi.endpoints.login.matchPending,
                (state) => {
                    state.status = "loading"
                    state.error = null
                }
            )
            .addMatcher(authApi.endpoints.login.matchFulfilled,
                (state, {payload}) => {
                    const {_id, token} = payload
                    state.token = token
                    state.userId = _id
                    saveToLocalStorage("id", _id)
                    saveToLocalStorage("token", token)
                }
            )
            //logout
            .addMatcher(authApi.endpoints.logout.matchFulfilled,
                (state) => {
                    state.token = null
                    state.userId = null
                    removeFromLocalStorage("id")
                    removeFromLocalStorage("token")
                }
            )
    }
})

export const selectCurrentUser = (state: RootState) => state.auth.userId;
export const selectCurrentError = (state: RootState) => state.auth.error;
export const selectCurrentStatus = (state: RootState) => state.auth.status;