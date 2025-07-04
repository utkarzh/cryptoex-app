import { newapiSlice } from "@/redux/newapi/newsapiSlice";

export const newtradeApi = newapiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Existing endpoint
    getOrderBook: builder.query({
      query: ({ pair }: { pair: string }) => ({
        url: `tradeswebsite/${pair}`,
        method: "GET",
      }),
    }),

    // ✅ New endpoint for Indoex depth data
    getIndoexDepth: builder.query({
      query: ({ pair }: { pair: string }) => ({
        url: `depthwebsite/${pair}`,
        method: "GET",
        // If Indoex is a completely external API, you may need to configure the base URL separately in your baseQuery
      }),
    }),
  }),
});

export const { useGetOrderBookQuery, useGetIndoexDepthQuery } = newtradeApi;
