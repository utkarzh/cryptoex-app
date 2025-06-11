import { apiSlice } from "../apiSlice";


export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHomePageData: builder.mutation({
      query: () => ({
        url: "getHomepagedata",
        method: "POST",
        body: {
        }
      }),
    }),
    getPartners: builder.mutation({
      query: () => ({
        url: "getpartners",
        method: "POST",
        body: {
        }
      }),
    }),

     
  }),
});

export const {
  useGetHomePageDataMutation,
  useGetPartnersMutation,
} = userApi;