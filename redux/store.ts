"use client";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import { apiSlice } from "./features/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// call the loaduser on every page load
const initializeApp = async () => {
  // it is fetch the user information after each reload of pages
  await store.dispatch(
    apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true })
  );
};

initializeApp();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;