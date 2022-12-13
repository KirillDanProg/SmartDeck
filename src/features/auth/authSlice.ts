import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {authAPI} from "./authAPI";

type InitialStateType = {
    token: string | null
    userId: string | null
}
const initialState: InitialStateType = {
    token: null,
    userId: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addMatcher(authAPI.endpoints.register.matchFulfilled,
                (state, {payload}) => {
                    state.userId = payload._id
                }
            )
            .addMatcher(authAPI.endpoints.login.matchFulfilled,
                (state, {payload}) => {
                   state.token = payload.token
                }
            )
    }
})

export const selectCurrentUser = (state: RootState) => state.auth.userId;