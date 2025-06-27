"use client";

import { getSessionId } from "@/utils/session";
import { generateSiteAuthCode } from "@/utils/siteauth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newapiSlice = createApi({
  reducerPath: "newapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.indoex.io/",
    prepareHeaders: (headers) => {
      const sessionid = getSessionId();
      const body = { sessionid };
      const siteauthcode = generateSiteAuthCode(body);
      headers.set("siteauthcode", siteauthcode);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSomething: builder.query({
      query: () => ({
        url: "something",
        method: "GET",
      }),
    }),
  }),
});
