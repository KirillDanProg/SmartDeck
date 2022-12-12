import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import {authAPI} from "../features/auth/authAPI";
import {authSlice} from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [authAPI.reducerPath]: authAPI.reducer
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

