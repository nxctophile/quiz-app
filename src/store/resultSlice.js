import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    addResult: (state, action) => {
      state.value.push(action.payload);
    },
    setResult: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addResult, setResult } = resultSlice.actions;

export default resultSlice.reducer;
