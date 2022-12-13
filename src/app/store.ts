import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import {appAPI} from "../features/auth/appAPI";
import {authSlice} from "../features/auth/authSlice";
import {profileSlice} from "../features/profile/profileSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        profile: profileSlice.reducer,
        [appAPI.reducerPath]: appAPI.reducer
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat([
                appAPI.middleware
                ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

