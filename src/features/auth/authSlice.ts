import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {appAPI} from "./appAPI";

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
    }
})

export const selectCurrentUser = (state: RootState) => state.auth.userId;
export const  selectToken= (state: RootState) => state.auth.token;