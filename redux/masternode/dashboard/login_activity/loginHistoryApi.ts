import { getSessionId } from "@/utils/session";
import { apiSlice } from "@/redux/masternode/apiSlice";

type UserActivity = {
  useractivity_id: number;
  useractivity_users_id: number;
  useractivity_activity: string;
  useractivity_toshowenduser: string;
  useractivity_addedon: string;
  useractivity_ipaddress: string;
};

type LoginHistoryResponse = {
  status: number;
  message: string;
  useractivity: UserActivity[];
  sessionid: string;
};

export const loginHistoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLoginHistory: builder.mutation<LoginHistoryResponse, void>({
      query: () => {
        const sessionid = getSessionId();
        return {
          url: "loginhistory",
          method: "POST",
          body: { sessionid },
        };
      },
    }),
  }),
});

export const { useGetLoginHistoryMutation } = loginHistoryApi;
