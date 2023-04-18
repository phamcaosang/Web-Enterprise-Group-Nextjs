import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiIndex } from "./Slices";

export const store = configureStore({
  reducer: {
    [apiIndex.reducerPath]: apiIndex.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiIndex.middleware),
});
setupListeners(store.dispatch);
