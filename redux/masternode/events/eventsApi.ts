import { getSessionId } from "@/utils/session";
import { apiSlice } from "../apiSlice";

export const eventsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAirdropList: builder.mutation({
      query: () => {
        const sessionid = getSessionId();
        return {
          url: "getairdroplisting",
          method: "POST",
          body: {
            sessionid,
          },
        };
      },
    }),

    getAirdropDetails: builder.mutation({
      query: (icoid: string) => {
        const sessionid = getSessionId();
        return {
          url: "airdropdetails",
          method: "POST",
          body: {
            sessionid,
            icoid,
          },
        };
      },
    }),

    getLaunchpadList: builder.mutation({
      query: () => {
        const sessionid = getSessionId();
        return {
          url: "getieolisting",
          method: "POST",
          body: {
            sessionid,
          },
        };
      },
    }),

    getLaunchpadDetails: builder.mutation({
      query: (icoid: string) => {
        const sessionid = getSessionId();
        return {
          url: "ieolistingdetailmultivendor",
          method: "POST",
          body: {
            sessionid,
            icoid,
          },
        };
      },
    }),

    getTradeContestList: builder.mutation({
      query: () => {
        const sessionid = getSessionId();
        return {
          url: "gettradecontestlisting",
          method: "POST",
          body: {
            sessionid,
          },
        };
      },
    }),

    getTradeContestDetails: builder.mutation({
      query: (tradecontestid: string) => {
        const sessionid = getSessionId();
        return {
          url: "gettradecontestindetail",
          method: "POST",
          body: {
            sessionid,
            tradecontestid,
          },
        };
      },
    }),

    // Add the new endpoint for getCombinationInfo
    getCombinationInfo: builder.mutation({
      query: ({ vendor, market }: { vendor: string; market: string }) => {
        const sessionid = getSessionId();
        return {
          url: "getcombinationinfo",
          method: "POST",
          body: { vendor, market, sessionid },
        };
      },
    }),
  }),
});

export const {
  useGetAirdropListMutation,
  useGetAirdropDetailsMutation,
  useGetLaunchpadListMutation,
  useGetLaunchpadDetailsMutation,
  useGetTradeContestListMutation,
  useGetTradeContestDetailsMutation,
  useGetCombinationInfoMutation,
} = eventsApi;
