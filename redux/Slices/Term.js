import { apiIndex } from ".";

const extendedApi = apiIndex.injectEndpoints({
  endpoints: (build) => ({
    getTerms: build.query({
      query: () => ({
        url: "term",
        method: "GET",
      }),
      providesTags: ["Term"],
    }),
    editTerm: build.mutation({
      query: (data) => ({
        url: `term`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Term"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetTermsQuery, useEditTermMutation } = extendedApi;
