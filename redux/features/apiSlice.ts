"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { userLoggedIn } from "./auth/authSlice";
// import { userLoggedIn } from "../auth/authSlice";


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.NEXT_PUBLIC_SERVER_URI,
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    // refreshToken: builder.query({
    //   query: () => ({
    //     url: "refresh",
    //     method: "GET",
    //     credentials: "include" as const,
    //   }),
    // }),

    // loadUser: builder.query({
    //   query: () => ({
    //     url: "me",
    //     method: "GET",
    //     credentials: "include" as const,
    //   }),
    //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //     try {
    //       const result = await queryFulfilled;
    //       dispatch(
    //         userLoggedIn({
    //           accessToken: result.data.accessToken,
    //           user: result.data.user,
    //         })
    //       );
    //     } catch (error) {
    //       console.log("error", error);
    //     }
    //   },
    // }),

    testApi: builder.query({
        query: () => ( {
            url: "todos",
            method:"GET"
        })
    })
  }),
});

// export const { useRefreshTokenQuery, useLoadUserQuery, useTestApiQuery } = apiSlice;
export const {  useTestApiQuery } = apiSlice;