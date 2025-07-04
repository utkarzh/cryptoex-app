import { getSessionId } from "@/utils/session";
import { apiSlice } from "../apiSlice";
import { userLoggedIn, userLoggedOut } from "./authSlice";
import { generateCaptchacode } from "@/utils/siteauth";

export const authApi = apiSlice.injectEndpoints({
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
          credentials: "include" as const,
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              isAuth: result.data.status === 1 ? true : false,
            })
          );
        } catch (error) {
          console.log("error", error);
        }
      },
    }),

    // New logoutUser mutation
    logoutUser: builder.mutation({
      query: () => {
        const sessionid = getSessionId(); // Get sessionid from your session utility
        return {
          url: "https://masternode.indoex.io/logoutuser",
          method: "POST",
          body: { sessionid },
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result.data.status === 1) {
            dispatch(userLoggedOut()); // Logout from redux store if API succeeds
          } else {
            console.log("Logout API failed:", result.data.message);
          }
        } catch (error) {
          console.error("Error during logout API call:", error);
        }
      },
    }),
  }),
});

export const {
  useGetCodeMutation,
  useValidateCodeMutation,
  useLogoutUserMutation,
} = authApi;
