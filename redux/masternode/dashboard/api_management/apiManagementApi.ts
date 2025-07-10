import { getSessionId } from "@/utils/session";
import { apiSlice } from "@/redux/masternode/apiSlice";

// Common response structure
type BaseResponse = {
  status: number;
  message: string;
  sessionid: string;
};

// ------------------ Types ------------------

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

export type UpdateKeyResponse = BaseResponse;

// ------------------ API Slice ------------------

export const apiKeyManagementApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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

    validateKey: builder.mutation<ValidateKeyResponse, ValidateKeyRequest>({
      query: ({ api_authcode, apirefkey }) => {
        const sessionid = getSessionId();
        return {
          url: "validatekey",
          method: "POST",
          body: { sessionid, api_authcode, apirefkey },
        };
      },
    }),

    getMyKeys: builder.mutation<GetMyKeysResponse, void>({
      query: () => {
        const sessionid = getSessionId();
        return {
          url: "getmykeys",
          method: "POST",
          body: { sessionid },
        };
      },
    }),

    updateKey: builder.mutation<UpdateKeyResponse, UpdateKeyRequest>({
      query: (data) => {
        const sessionid = getSessionId();
        return {
          url: "updatekey",
          method: "POST",
          body: { ...data, sessionid },
        };
      },
    }),
  }),
});

// ------------------ Hooks ------------------

export const {
  useGenerateKeyMutation,
  useResendVerificationKeyMutation,
  useValidateKeyMutation,
  useGetMyKeysMutation,
  useUpdateKeyMutation,
} = apiKeyManagementApi;
