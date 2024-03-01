import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  projects: [],
  analytics: {},
};

// First, create the thunk
export const getProjects = createAsyncThunk("projects/get", async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_ROOT_V1}/projects`, {
    withCredentials: true,
  });
  return res.data;
});
export const getProjectAnalytics = createAsyncThunk(
  "projects/analytics/get",
  async ({ id }) => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_ROOT_V1}/projects/analytics/${id}`,
      {
        withCredentials: true,
      }
    );
    return res.data;
  }
);
export const createProject = createAsyncThunk(
  "projects/create",
  async ({ project_name, project_by }) => {
    const res = await axios.post(
      `${import.meta.env.VITE_API_ROOT_V1}/projects`,
      { project_name, project_by },
      {
        withCredentials: true,
      }
    );
    return res.data;
  }
);
export const deleteProject = createAsyncThunk(
  "projects/delete",
  async ({ id }) => {
    const res = await axios.delete(
      `${import.meta.env.VITE_API_ROOT_V1}/projects/${id}`,
      {
        withCredentials: true,
      }
    );
    return res.data;
  }
);

// Function to remove object by ID
function removeObjectById(arr, id) {
  // Find index of object with matching ID
  const index = arr.findIndex((obj) => obj.id === id);

  // If index is found (-1 means no match), remove object at that index
  if (index !== -1) {
    arr.splice(index, 1);
  }
}

// Usage example
// removeObjectById(arrayOfObjects, 2); // Remove object with id: 2

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
    builder.addCase(createProject.fulfilled, (state, action) => {
      state.projects = [...state.projects, action.payload];
    });
    builder.addCase(getProjectAnalytics.fulfilled, (state, action) => {
      state.analytics = action.payload;
    });
    builder.addCase(deleteProject.fulfilled, (state, action) => {
      //   state.analytics = action.payload;
      removeObjectById(state.projects, action.payload);
    });
  },
});

// export const {} = projectSlice.actions;

export default projectSlice.reducer;
