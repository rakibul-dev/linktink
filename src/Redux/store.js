import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import counterSlice from "./slices/userSlice";

import logger from "redux-logger";
import userSlice from "./slices/userSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
