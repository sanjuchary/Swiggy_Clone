import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./reducers/locationreducer";

export const store = configureStore({
  reducer: {
    location: locationReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Ensure Thunk middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
