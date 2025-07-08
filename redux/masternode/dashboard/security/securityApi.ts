import { getSessionId } from "@/utils/session";
import { apiSlice } from "@/redux/masternode/apiSlice";

export const securityApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfileSettings: builder.query({
      query: () => {
        const sessionid = getSessionId();
        return {
          url: "getprofilesettings",
          method: "POST",
          body: { sessionid },
        };
      },
    }),

    changePassword: builder.mutation<
      { status: number; message: string }, // ✅ expected response type
      { oldpassword: string; newpassword: string } // ✅ input to the mutation
    >({
      query: ({ oldpassword, newpassword }) => {
        const sessionid = getSessionId();
        return {
          url: "changepassword",
          method: "POST",
          body: {
            sessionid,
            oldpassword,
            newpassword,
          },
        };
      },
    }),
  }),
});

export const { useGetProfileSettingsQuery, useChangePasswordMutation } =
  securityApi;
