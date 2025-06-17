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
  }),
});

export const {
  useGetAirdropListMutation,
  useGetAirdropDetailsMutation,
  useGetLaunchpadListMutation,
  useGetLaunchpadDetailsMutation,
} = eventsApi;
