import { getSessionId } from "@/utils/session";
import { apiSlice } from "../../apiSlice";

// ------------------ Common Response ------------------
type BaseResponse = {
  status: number;
  message: string;
  sessionid: string;
};

// ------------------ Request/Response Types ------------------

// generatekey
export type GenerateKeyRequest = {
  name: string;
  api_addorder: "ENABLED" | "DISABLED";
  api_balance: "ENABLED" | "DISABLED";
  api_deleteorder: "ENABLED" | "DISABLED";
  api_getorder: "ENABLED" | "DISABLED";
  api_iplist: string;
};

export type GenerateKeyResponse = BaseResponse & {
  apirefkey: number;
};

// resendverificationkey
export type ResendVerificationKeyResponse = BaseResponse;

// validatekey
export type ValidateKeyRequest = {
  api_authcode: string;
  apirefkey: number;
};

export type ApiKeyDetails = {
  name: string;
  privatekey: string;
  publickey: string;
  iplist: string;
  balance: "ENABLED" | "DISABLED";
  vieworder: "ENABLED" | "DISABLED";
  addorder: "ENABLED" | "DISABLED";
  deleteorder: "ENABLED" | "DISABLED";
  createdon: string;
};

export type ValidateKeyResponse = BaseResponse & {
  apikeys: ApiKeyDetails[];
};

// getmykeys
export type GetMyKeysResponse = BaseResponse & {
  apikeys: Array<{
    refid: number;
    name: string;
    publickey: string;
    iplist: string;
    balance: "ENABLED" | "DISABLED";
    vieworder: "ENABLED" | "DISABLED";
    addorder: "ENABLED" | "DISABLED";
    deleteorder: "ENABLED" | "DISABLED";
    createdon: string;
    expiresin: number;
  }>;
};

// updatekey
export type UpdateKeyRequest = {
  id: number;
  name: string;
  api_addorder: "ENABLED" | "DISABLED";
  api_balance: "ENABLED" | "DISABLED";
  api_deleteorder: "ENABLED" | "DISABLED";
  api_getorder: "ENABLED" | "DISABLED";
  api_iplist: string;
};

export type UpdateKeyResponse = BaseResponse & {
  apirefkey: string;
};

// deletekey
export type DeleteKeyRequest = {
  id: number;
};

export type DeleteKeyResponse = BaseResponse & {
  apirefkey: string;
};

// ------------------ API Slice ------------------

export const apiKeyManagementApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Generate key
    generateKey: builder.mutation<GenerateKeyResponse, GenerateKeyRequest>({
      query: (data) => {
        const sessionid = getSessionId();
        return {
          url: "generatekey",
          method: "POST",
          body: { ...data, sessionid },
        };
      },
    }),

    // Resend verification key
    resendVerificationKey: builder.mutation<
      ResendVerificationKeyResponse,
      void
    >({
      query: () => {
        const sessionid = getSessionId();
        return {
          url: "resendverificationkey",
          method: "POST",
          body: { sessionid },
        };
      },
    }),

    // Validate key
    validateKey: builder.mutation<ValidateKeyResponse, ValidateKeyRequest>({
      query: ({ api_authcode, apirefkey }) => {
        const sessionid = getSessionId();
        return {
          url: "validatekey",
          method: "POST",
          body: { sessionid, api_authcode, apirefkey },
        };
      },
      invalidatesTags: ["MyKeys"],
    }),

    // Get My Keys
    getMyKeys: builder.query<GetMyKeysResponse, void>({
      query: () => {
        const sessionid = getSessionId();
        return {
          url: "getmykeys",
          method: "POST",
          body: { sessionid },
        };
      },
      providesTags: ["MyKeys"],
    }),

    // Update key
    updateKey: builder.mutation<UpdateKeyResponse, UpdateKeyRequest>({
      query: (data) => {
        const sessionid = getSessionId();
        return {
          url: "updatekey",
          method: "POST",
          body: { ...data, sessionid },
        };
      },
      invalidatesTags: ["MyKeys"],
    }),

    // Delete key
    deleteKey: builder.mutation<DeleteKeyResponse, DeleteKeyRequest>({
      query: ({ id }) => {
        const sessionid = getSessionId();
        return {
          url: "deletekey",
          method: "POST",
          body: { sessionid, id },
        };
      },
      invalidatesTags: ["MyKeys"],
    }),
  }),

  overrideExisting: false,
});

// ------------------ Hooks ------------------

export const {
  useGenerateKeyMutation,
  useResendVerificationKeyMutation,
  useValidateKeyMutation,
  useGetMyKeysQuery,
  useUpdateKeyMutation,
  useDeleteKeyMutation,
} = apiKeyManagementApi;
