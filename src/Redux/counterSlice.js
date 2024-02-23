import { createSlice } from "@reduxjs/toolkit";

// Step 1: Define Initial State
const initialState = {
  value: 0,
};

// Step 2: Define Reducers
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    // Optionally, you can define additional reducers here
  },
});

// Step 3: Export Action Creators and Reducer
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
