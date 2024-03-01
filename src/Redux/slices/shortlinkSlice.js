import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  shortlinks: null,
  analytics: {},
};

// First, create the thunk
export const getShortlinks = createAsyncThunk(
  "shortlinks/get",
  async (project_id) => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_ROOT_V1}/shortlinks`,
      { params: { project_id } },
      {
        withCredentials: true,
      }
    );
    return res.data;
  }
);
export const createShortlink = createAsyncThunk(
  "shortlinks/create",
  async ({ origina_url, project_id }) => {
    const res = await axios.post(
      `${import.meta.env.VITE_API_ROOT_V1}/shortlinks`,
      { origina_url, project_id },
      {
        withCredentials: true,
      }
    );
    return res.data;
  }
);
export const getShortLinkAnalytics = createAsyncThunk(
  "shortlinks/get/analytics",
  async ({ id }) => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_ROOT_V1}/shortlinks/analytics/${id}`,
      {
        withCredentials: true,
      }
    );
    return res.data;
  }
);

export const shortlinkSlice = createSlice({
  name: "shortlinks",
  initialState,
  reducers: {
    setShortlinksEmpty: (state) => {
      state.shortlinks = null;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getShortlinks.fulfilled, (state, action) => {
      state.shortlinks = action.payload;
    });
    builder.addCase(createShortlink.fulfilled, (state, action) => {
      state.shortlinks = [...state.shortlinks, action.payload];
    });
    builder.addCase(getShortLinkAnalytics.fulfilled, (state, action) => {
      state.analytics = action.payload;
    });
  },
});

export const { setShortlinksEmpty } = shortlinkSlice.actions;

export default shortlinkSlice.reducer;
