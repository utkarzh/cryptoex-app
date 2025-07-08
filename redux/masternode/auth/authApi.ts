import { getSessionId } from "@/utils/session";
import { apiSlice } from "../apiSlice";
import { userLoggedIn, userLoggedOut } from "./authSlice";
import { generateCaptchacode } from "@/utils/siteauth";

export const authApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getCode: builder.mutation({
      query: ({ useremail, userpassword }) => {
        const sessionid = getSessionId();
        const captchacode = generateCaptchacode(sessionid.substring(1, 8));
        return {
          url: "getcode",
          method: "POST",
          body: {
            useremail,
            userpassword,
            captchacode,
            sessionid,
          },
        };
      },
    }),

    validateCode: builder.mutation({
      query: ({ useremail, userpassword, otp }) => {
        const sessionid = getSessionId();
        const captchacode = generateCaptchacode(sessionid.substring(1, 8));
        return {
          url: "validatelogin",
          method: "POST",
          body: {
            useremail,
            userpassword,
            otp,
            captchacode,
            sessionid,
          },
          // credentials: "include" as const,
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result, result.data.status);
          dispatch(
            userLoggedIn({
              isAuth: result.data.status === 1 || result.data.status === 2,
            })
          );
        } catch (error) {
          console.log("error", error);
        }
      },
    }),

    logoutUser: builder.mutation({
      query: () => {
        const sessionid = getSessionId();
        return {
          url: "logoutuser",
          method: "POST",
          body: { sessionid },
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result.data.status === 1) {
            dispatch(userLoggedOut());
          } else {
            console.log("Logout API failed:", result.data.message);
          }
        } catch (error) {
          console.error("Error during logout API call:", error);
        }
      },
    }),

    // ✅ registerUser endpoint
    registerUser: builder.mutation({
      query: ({
        username,
        useremail,
        userpassword,
        country,
        phone = "",
        referalcode = null,
      }: {
        username: string;
        useremail: string;
        userpassword: string;
        country: string;
        phone?: string;
        referalcode?: string | null;
      }) => {
        const sessionid = getSessionId();
        const captchacode = generateCaptchacode(sessionid.substring(1, 8));
        return {
          url: "registeruser",
          method: "POST",
          body: {
            username,
            useremail,
            userpassword,
            country,
            phone,
            referalcode,
            captchacode,
            sessionid,
          },
        };
      },
    }),

    // ✅ resendVerificationMail endpoint
    resendVerificationMail: builder.mutation({
      query: ({ useremail }: { useremail: string }) => {
        const sessionid = getSessionId();
        const captchacode = generateCaptchacode(sessionid.substring(1, 8));
        return {
          url: "resendverificationmail",
          method: "POST",
          body: {
            useremail,
            sessionid,
            captchacode,
          },
        };
      },
    }),
  }),
});

export const {
  useGetCodeMutation,
  useValidateCodeMutation,
  useLogoutUserMutation,
  useRegisterUserMutation,
  useResendVerificationMailMutation,
} = authApi;
