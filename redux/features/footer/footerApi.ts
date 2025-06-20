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
  }),
});

export const { useGetFeeListMutation } = footerApi;
