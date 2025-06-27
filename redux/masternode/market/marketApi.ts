import { getSessionId } from "@/utils/session";
import { apiSlice } from "../apiSlice";

export const marketApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMArketPageData: builder.mutation({
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
  }),
});

export const { useGetMArketPageDataMutation } = marketApi;
