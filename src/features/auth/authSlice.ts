import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {appAPI} from "./appAPI";

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
            .addMatcher(appAPI.endpoints.register.matchFulfilled,
                (state, {payload}) => {
                    state.userId = payload._id
                }
            )
            .addMatcher(appAPI.endpoints.login.matchFulfilled,
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