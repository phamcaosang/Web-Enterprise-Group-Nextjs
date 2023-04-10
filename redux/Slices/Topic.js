import { apiIndex } from "./index";

const extendedApi = apiIndex.injectEndpoints({
  endpoints: (build) => ({
    getTopics: build.query({
      query: () => ({
        url: "topic",
        method: "GET",
      }),
      providesTags: ["Topic"],
    }),
    addTopic: build.mutation({
      query: (data) => ({
        url: "topic",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Topic"],
    }),
    editTopic: build.mutation({
      query: (data) => ({
        url: `topic/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Topic"],
    }),
    deleteTopic: build.mutation({
      query: (id) => ({
        url: `topic/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Topic"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetTopicsQuery,
  useAddTopicMutation,
  useEditTopicMutation,
  useDeleteTopicMutation,
} = extendedApi;
