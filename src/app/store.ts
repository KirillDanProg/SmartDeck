import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers
} from "@reduxjs/toolkit";
import {authSlice} from "../features/auth/authSlice";
import {apiSlice} from "./api/apiSlice";
import {profileSlice} from "../features/profile/profileSlice";
import {cardsSlice} from "../features/packs-cards/cards/cardsSlice";
import {packsSlice} from "../features/packs-cards/packs/packsSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  profile: profileSlice.reducer,
  packs: packsSlice.reducer,
  cards: cardsSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
