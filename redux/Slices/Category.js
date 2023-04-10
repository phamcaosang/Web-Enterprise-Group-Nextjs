import { apiIndex } from "./index";

const extendedApi = apiIndex.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => ({
        url: "category",
        method: "GET",
      }),
      providesTags: ["Category"],
    }),
    addCategory: build.mutation({
      query: (data) => ({
        url: "category",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
    editCategory: build.mutation({
      query: (data) => ({
        url: `category/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useEditCategoryMutation,
  useDeleteCategoryMutation,
} = extendedApi;
