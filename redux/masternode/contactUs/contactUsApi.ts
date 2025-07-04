// src/services/contactUsApi.js

import { getSessionId } from "@/utils/session";
import { apiSlice } from "../apiSlice"; // Importing the base API slice

export const contactUsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitContactUs: builder.mutation({
      query: ({ email, priority, type, subject, message }) => {
        const sessionid = getSessionId(); // Retrieve the session ID
        return {
          url: "updatecontactus", // The API endpoint to call
          method: "POST", // HTTP method
          body: {
            sessionid, // Add session ID to the payload
            email, // Add email to the payload
            priority, // Add priority to the payload
            type, // Add message type
            subject, // Add the subject of the message
            message, // Add the actual message
          },
        };
      },
    }),
  }),
});

export const { useSubmitContactUsMutation } = contactUsApi;
