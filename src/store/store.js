import { configureStore } from "@reduxjs/toolkit";
import { answerSlice } from "./answerSlice";

export const store = configureStore({
  reducer: {
    answer: answerSlice.reducer,
  },
});
