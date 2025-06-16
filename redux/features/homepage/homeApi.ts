import { getSessionId } from "@/utils/session";
import { apiSlice } from "../apiSlice";

export const homeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHomePageData: builder.mutation({
      query: () => {
        const sessionid = getSessionId();
        return {
          url: "getHomepagedata",
          method: "POST",
          body: {
            sessionid,
          },
        };
      },
    }),

    getPartners: builder.mutation({
      query: () => {
        const sessionid = getSessionId();
        return {
          url: "getpartners",
          method: "POST",
          body: {
            sessionid,
          },
        };
      },
    }),
  }),
});

export const { useGetHomePageDataMutation, useGetPartnersMutation } = homeApi;
