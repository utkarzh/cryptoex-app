import { getSessionId } from "@/utils/session";
import { apiSlice } from "@/redux/masternode/apiSlice";

// -------------------------
// Define types
// -------------------------
export type UserInfo = {
  firstName: string;
  email: string;
  phishing: string;
  kyc: string;
  mobile2fa: string;
  user2pin: string;
  get2FAImage: string;
  idname: string;
  GprivateKey: string;
  myreferalcode: string;
  mmservice: boolean;
};

type GetProfileSettingsResponse = {
  status: number;

  userinfo: UserInfo;
};

// -------------------------
// Inject endpoints
// -------------------------
export const securityApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfileSettings: builder.query<GetProfileSettingsResponse, void>({
      query: () => {
        const sessionid = getSessionId();
        return {
          url: "getprofilesettings",
          method: "POST",
          body: { sessionid },
        };
      },
      providesTags: ["ProfileSettings"],
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
          body: { sessionid, oldpassword, newpassword },
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
          body: { sessionid, userphishingcode },
        };
      },
    }),

    validatePhishingCode: builder.mutation<
      { status: number; message: string },
      { userphishingcode: string; userverificationcode: string }
    >({
      query: ({ userphishingcode, userverificationcode }) => {
        const sessionid = getSessionId();
        return {
          url: "validatephishingcode",
          method: "POST",
          body: { sessionid, userphishingcode, userverificationcode },
        };
      },
      invalidatesTags: ["ProfileSettings"],
    }),

    removePhishingCode: builder.mutation<
      { status: number; message: string },
      void
    >({
      query: () => {
        const sessionid = getSessionId();
        return {
          url: "removephishingcode",
          method: "POST",
          body: { sessionid },
        };
      },
      invalidatesTags: ["ProfileSettings"],
    }),

    validateMobileCode: builder.mutation<
      { status: number; message: string },
      { otp: string }
    >({
      query: ({ otp }) => {
        const sessionid = getSessionId();
        return {
          url: "validatemobilecode",
          method: "POST",
          body: { sessionid, otp },
        };
      },
      invalidatesTags: ["ProfileSettings"],
    }),

    resetMobileCode: builder.mutation<
      { status: number; message: string },
      { otp: string }
    >({
      query: ({ otp }) => {
        const sessionid = getSessionId();
        return {
          url: "resetmobilecode",
          method: "POST",
          body: { sessionid, otp },
        };
      },
      invalidatesTags: ["ProfileSettings"],
    }),

    updatePin: builder.mutation<
      { status: number; message: string },
      { oldpin: string; newpin: string }
    >({
      query: ({ oldpin, newpin }) => {
        const sessionid = getSessionId();
        return {
          url: "updatepin",
          method: "POST",
          body: { sessionid, oldpin, newpin },
        };
      },
      invalidatesTags: ["ProfileSettings"],
    }),

    forgot2Pin: builder.mutation<
      { status: number; message: string },
      { otp: string }
    >({
      query: ({ otp }) => {
        const sessionid = getSessionId();
        return {
          url: "forgot2pin",
          method: "POST",
          body: { sessionid, otp },
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
  useRemovePhishingCodeMutation,
  useValidateMobileCodeMutation,
  useResetMobileCodeMutation,
  useUpdatePinMutation,
  useForgot2PinMutation,
} = securityApi;
