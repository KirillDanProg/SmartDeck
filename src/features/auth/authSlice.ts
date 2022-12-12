import {createSlice} from "@reduxjs/toolkit";
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
})

export const selectCurrentUser = (state: RootState) => state.auth.userId
