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
      { status: number; message: string },
      { oldpassword: string; newpassword: string }
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

    sendPhishingCode: builder.mutation<
      { status: number; message: string },
      { userphishingcode: string }
    >({
      query: ({ userphishingcode }) => {
        const sessionid = getSessionId();
        return {
          url: "sendphishingcode",
          method: "POST",
          body: {
            sessionid,
            userphishingcode,
          },
        };
      },
    }),

    validatePhishingCode: builder.mutation<
      { status: number; message: string },
      {
        userphishingcode: string;
        userverificationcode: string;
      }
    >({
      query: ({ userphishingcode, userverificationcode }) => {
        const sessionid = getSessionId();
        return {
          url: "validatephishingcode",
          method: "POST",
          body: {
            sessionid,
            userphishingcode,
            userverificationcode,
          },
        };
      },
    }),
  }),
});

export const {
  useGetProfileSettingsQuery,
  useChangePasswordMutation,
  useSendPhishingCodeMutation,
  useValidatePhishingCodeMutation,
} = securityApi;
