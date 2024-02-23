import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import counterSlice from "./slices/userSlice";

import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
