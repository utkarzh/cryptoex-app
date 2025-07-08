"use client";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./masternode/auth/authSlice";
import { apiSlice } from "./masternode/apiSlice";
import { newapiSlice } from "./newapi/newsapiSlice";
// baseUrl 2

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [newapiSlice.reducerPath]: newapiSlice.reducer,
    auth: authSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, newapiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
