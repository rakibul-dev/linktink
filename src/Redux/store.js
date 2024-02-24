import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import counterSlice from "./slices/userSlice";

import logger from "redux-logger";
import userSlice from "./slices/userSlice";
import projectSlice from "./slices/projectSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    projects: projectSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
