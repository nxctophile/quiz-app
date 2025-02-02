import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      state.value.push(action.payload);
    },
    setAnswer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addAnswer, setAnswer } = answerSlice.actions;

export default answerSlice.reducer;
