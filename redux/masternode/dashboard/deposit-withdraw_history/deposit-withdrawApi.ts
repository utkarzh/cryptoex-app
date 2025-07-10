import { getSessionId } from "@/utils/session";
import { apiSlice } from "@/redux/masternode/apiSlice";

// Single record type
export type RecordTransaction = {
  transactions_id: number;
  transactions_users_id: number;
  transactions_users_reciverid: number;
  transactions_useraddress: string;
  transactions_transactionamount: string;
  transactions_transactionid: string;
  transactions_transactiontime: string;
  transactions_channel: string;
  transactions_txntype: string;
  transactions_vendors_id: number;
  transactions_vendor: string;
  transactions_status: string;
  transactions_hashcode: string;
  transactions_refcode: string;
  transactions_info: string;
};

// Full response type
export type GetRecordHistoryResponse = {
  status: number;
  message: string;
  sessionid: string;
  orders: RecordTransaction[];
};

// Payload for the mutation
export type GetRecordHistoryRequest = {
  type: "TRADE" | "WITHDRAW" | "DEPOSIT" | string;
};

export const recordHistoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRecordHistory: builder.mutation<
      GetRecordHistoryResponse,
      GetRecordHistoryRequest
    >({
      query: ({ type }) => {
        const sessionid = getSessionId();
        return {
          url: "getMyRecordHistory",
          method: "POST",
          body: { sessionid, type },
        };
      },
    }),
  }),
});

export const { useGetRecordHistoryMutation } = recordHistoryApi;
