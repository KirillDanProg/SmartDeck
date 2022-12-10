import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    email: null,
    token: null,
    status: ""
  },
  reducers: {
    register: (state, action) => {
      state.email = action.payload.email
    },
    login: (state, action) => {},
    logout: () => {},
    authMe: () => {}
  },
})
