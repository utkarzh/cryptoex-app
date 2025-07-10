import { getSessionId } from "@/utils/session";
import { apiSlice } from "@/redux/masternode/apiSlice";

export type TrustedZone = {
  userlocationmap_id: number;
  userlocationmap_zone: string;
  userlocationmap_location: string;
  userlocationmap_addedon: string;
};

export type GetTrustedZonesResponse = {
  status: number;
  message: string;
  userzones: TrustedZone[];
  sessionid: string;
};

export type DeleteTrustedZoneResponse = {
  status: number;
  message: string;
  sessionid: string;
};

export type DeleteTrustedZoneRequest = {
  requestid: number;
};

export const deviceManagementApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrustedZones: builder.mutation<GetTrustedZonesResponse, void>({
      query: () => {
        const sessionid = getSessionId();
        return {
          url: "gettrustedzones",
          method: "POST",
          body: { sessionid },
        };
      },
    }),

    deleteTrustedZone: builder.mutation<
      DeleteTrustedZoneResponse,
      DeleteTrustedZoneRequest
    >({
      query: ({ requestid }) => {
        const sessionid = getSessionId();
        return {
          url: "deletetrustedzone",
          method: "POST",
          body: { sessionid, requestid },
        };
      },
    }),
  }),
});

export const { useGetTrustedZonesMutation, useDeleteTrustedZoneMutation } =
  deviceManagementApi;
