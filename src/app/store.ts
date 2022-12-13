import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import {authAPI} from "../features/auth/authAPI";
import {authSlice} from "../features/auth/authSlice";
import {profileSlice} from "../features/profile/profileSlice";
import {profileAPI} from "../features/profile/profileAPI";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [authAPI.reducerPath]: authAPI.reducer,
        profile: profileSlice.reducer,
        [profileAPI.reducerPath]: profileAPI.reducer
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat([
                authAPI.middleware,
                profileAPI.middleware
                ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

