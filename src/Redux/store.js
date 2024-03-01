import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import counterSlice from "./slices/userSlice";

import logger from "redux-logger";
import userSlice from "./slices/userSlice";
import projectSlice from "./slices/projectSlice";
import shortlinkSlice from "./slices/shortlinkSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    projects: projectSlice,
    shortlinks: shortlinkSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
