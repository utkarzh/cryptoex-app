// src/redux/masternode/apiSlice.ts
"use client";

import { getSessionId } from "@/utils/session";
import { generateSiteAuthCode } from "@/utils/siteauth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedOut } from "./auth/authSlice";

// Prepare your raw base query
const rawBaseQuery = fetchBaseQuery({
  baseUrl: "https://masternode.indoex.io/",
  prepareHeaders: (headers) => {
    const sessionid = getSessionId();
    const body = { sessionid };
    const siteauthcode = generateSiteAuthCode(body);
    headers.set("siteauthcode", siteauthcode);
    return headers;
  },
});

// Custom baseQuery wrapper to intercept session expiration
const baseQueryWithSessionHandler: typeof rawBaseQuery = async (
  args,
  api,
  extraOptions
) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  // 🛑 Check for session expired (status -9)
  if (
    result?.data &&
    typeof result.data === "object" &&
    "status" in result.data &&
    result.data.status === -9
  ) {
    // 🔓 Dispatch logout and redirect
    api.dispatch(userLoggedOut());
    if (typeof window !== "undefined") {
      localStorage.removeItem("indoex_userauthentication");
      window.location.href = "/login"; // 🔁 or your custom route
    }
  }

  return result;
};

// Create the API slice using the custom base query
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithSessionHandler,
  endpoints: (builder) => ({
    loadUser: builder.query({
      query: () => ({
        url: "me",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});
