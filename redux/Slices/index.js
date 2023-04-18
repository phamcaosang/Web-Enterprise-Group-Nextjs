// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const apiIndex = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://web-enterprise-group-nextjs.vercel.app/api",
  }),
  endpoints: () => ({}),
  tagTypes: ["Department", "Category", "Term", "Topic"],
});
