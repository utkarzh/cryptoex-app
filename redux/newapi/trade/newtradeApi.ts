import { newapiSlice } from "@/redux/newapi/newsapiSlice";

export const newtradeApi = newapiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrderBook: builder.query({
      query: ({ pair }: { pair: string }) => {
        return {
          url: `tradeswebsite/${pair}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetOrderBookQuery } = newtradeApi;
