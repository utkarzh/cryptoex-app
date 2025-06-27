import { getSessionId } from "@/utils/session";
import { apiSlice } from "../apiSlice";

export const footerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFeeList: builder.mutation({
      query: () => {
        const sessionid = getSessionId();
        return {
          url: "getVendorinfo",
          method: "POST",
          body: {
            sessionid,
          },
        };
      },
    }),

    getAnnouncement: builder.mutation({
      query: ({ pagenumber = 0, searchquery = "" }) => {
        const sessionid = getSessionId();
        return {
          url: "getannouncement",
          method: "POST",
          body: {
            sessionid,
            pagenumber,
            searchquery,
          },
        };
      },
    }),

    getSingleAnnouncement: builder.mutation({
      query: (announcement_id) => {
        const sessionid = getSessionId();
        return {
          url: "getannouncementdetails",
          method: "POST",
          body: {
            sessionid,
            announcement_id,
          },
        };
      },
    }),
  }),
});

export const {
  useGetFeeListMutation,
  useGetAnnouncementMutation,
  useGetSingleAnnouncementMutation,
} = footerApi;
