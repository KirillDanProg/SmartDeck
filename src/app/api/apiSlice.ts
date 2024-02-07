import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RootState} from "../store";
import {baseUrlGenerator} from "common/utils";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrlGenerator(),
    credentials: "include",
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("token", `${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ["Packs", "Cards"],
  endpoints: () => ({})
});
