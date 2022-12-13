import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

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

export const changeNameTC = createAsyncThunk('profile/changeName', async (newName: string, thunkAPI) => {
    //todo: make right response with rules rtk query
        return {newName: newName}
})

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        changeName(state, action: PayloadAction<{ newName: string }>) {
            state.name = action.payload.newName
        }
    },
    extraReducers: builder => {
        builder.addCase(changeNameTC.fulfilled, (state, action) => {
            state.name = action.payload.newName
        })
    }

})

export const {changeName} = profileSlice.actions

