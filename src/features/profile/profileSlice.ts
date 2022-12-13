import {createSlice} from "@reduxjs/toolkit";

type InitialStateType = {
    name: string
    avatar: string
    email: string
}
const initialState: InitialStateType = {
    name: "new name",
    avatar: "",
    email: "incubator@mail.ru"
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: builder => {
        // builder

    }
})

