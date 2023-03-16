import { apiIndex } from "./index";

const extendedApi = apiIndex.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query({
      query: () => ({
        url: "department",
        method: "GET",
      }),
      providesTags: ["Department"],
    }),
    addDepartment: build.mutation({
      query: (data) => ({
        url: "department",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Department"],
    }),
    editDepartment: build.mutation({
      query: (data) => ({
        url: `department/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Department"],
    }),
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `department/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Department"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetDepartmentsQuery,
  useAddDepartmentMutation,
  useEditDepartmentMutation,
  useDeleteDepartmentMutation,
} = extendedApi;
