import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const indexApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.BE_URL || '/api/' }),
    endpoints: () => ({}),
    tagTypes: ["Department", "Category", "Term", "Topic"]
})

// https://web-enterprise-group-nextjs.vercel.app/api/
