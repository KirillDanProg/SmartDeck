import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {authAPI} from "./authAPI";

type InitialStateType = {
    token: string | null
    userId: string | null
    email: string | null
}
const initialState: InitialStateType = {
    token: null,
    userId: null,
    email:null
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
            .addMatcher(authAPI.endpoints.me.matchFulfilled,
                (state, {payload}) => {
                    // state.email = payload
                }
            )
    }
})

export const selectCurrentUser = (state: RootState) => state.auth.userId;
export const selectUserEmail = (state: RootState) => state.auth.email;