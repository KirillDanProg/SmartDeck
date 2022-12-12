import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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
    reducers: {
    setIsLoggedIn(state,action:PayloadAction<{}>){

    }
    },
})

export const {} = authSlice.actions

export const authReducer = authSlice.reducer;
// export const {setIsLoggedIn} = authSlice.actions;