"use client";

import { getSessionId } from "@/utils/session";
import { apiSlice } from "../apiSlice";
// import { userRegistration, userLoggedIn, userLoggedOut } from "./authSlice";
import { generateCaptchacode } from "@/utils/siteauth";
import { userLoggedIn } from "./authSlice";
// type RegistrationResponse = {
//   message: string;
//   activationToken: string;
// };

// type RegistrationData = {
//   token: string;
// };

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // end point here
    // for registration
    // register: builder.mutation<RegistrationResponse, RegistrationData>({
    //   query: (data) => ({
    //     url: "registration",
    //     method: "POST",
    //     body: data,
    //     credentials: "include" as const,
    //   }),
    //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //     try {
    //       const result = await queryFulfilled;
    //       dispatch(
    //         userRegistration({
    //           token: result.data.activationToken,
    //         })
    //       );
    //     } catch (error) {
    //       console.log("error", error);
    //     }
    //   },
    // }),

    // activation: builder.mutation({
    //   query: ({ activation_token, activation_code }) => ({
    //     url: "activation-user",
    //     method: "POST",
    //     body: {
    //       activation_token,
    //       activation_code,
    //     },
    //   }),
    // }),

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

    // validateCode: builder.mutation({
    //   query: ({ useremail, userpassword, otp }) => {
    //     const sessionid = getSessionId();
    //     const captchacode = generateCaptchacode(sessionid.substring(1, 8));
    //     return {
    //       url: "getcode",
    //       method: "POST",
    //       body: {
    //         useremail,
    //         userpassword,
    //         otp,
    //         captchacode,
    //         sessionid,
    //       },
    //     };
    //   },
    // }),

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
          console.log("result on qualifieddd.....", result);
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

    // socialAuth: builder.mutation({
    //   query: ({ email, name, avatar }) => ({
    //     url: "social-auth",
    //     method: "POST",
    //     body: {
    //       email,
    //       name,
    //       avatar,
    //     },
    //     credentials: "include" as const,
    //   }),
    //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //     try {
    //       const result = await queryFulfilled;
    //       dispatch(
    //         userLoggedIn({
    //           accessToken: result.data.accessToken,
    //           user: result.data.user,
    //         })
    //       );
    //     } catch (error) {
    //       console.log("error", error);
    //     }
    //   },
    // }),

    // logOut: builder.query({
    //   query: () => ({
    //     url: "logout",
    //     method: "GET",
    //     credentials: "include" as const,
    //   }),
    //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //     console.log("test", queryFulfilled);
    //     try {
    //       dispatch(userLoggedOut());
    //     } catch (error) {
    //       console.log("error", error);
    //     }
    //   },
    // }),
  }),
});

export const { useGetCodeMutation, useValidateCodeMutation } = authApi;
