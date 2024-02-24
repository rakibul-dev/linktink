import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  projects: [],
};

// First, create the thunk
export const getProjects = createAsyncThunk("projects/get", async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_ROOT_V1}/projects`, {
    withCredentials: true,
  });
  return res.data;
});

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
  },
});

// export const {} = projectSlice.actions;

export default projectSlice.reducer;
