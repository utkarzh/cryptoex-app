import { getSessionId } from "@/utils/session";
import { apiSlice } from "../apiSlice";

export const tradeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAvailablePairs: builder.mutation({
      query: () => {
        const sessionid = getSessionId();
        return {
          url: "getavailablepairs",
          method: "POST",
          body: {
            sessionid,
          },
        };
      },
    }),
  }),
});

export const { useGetAvailablePairsMutation } = tradeApi;
