import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import {authSlice} from "../features/auth/authSlice";
import {apiSlice} from "../features/api/apiSlice";
import {profileSlice} from "../features/profile/profileSlice";
import {packsSlice} from "../features/cards/packsSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        profile: profileSlice.reducer,
        packs: packsSlice.reducer,
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

