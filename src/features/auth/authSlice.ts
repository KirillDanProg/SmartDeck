import {createSlice} from "@reduxjs/toolkit";
import {authAPI} from "./authAPI";
import {RootState} from "../../app/store";

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
    }
})

export const selectCurrentUser = (state: RootState) => state.auth.userId
