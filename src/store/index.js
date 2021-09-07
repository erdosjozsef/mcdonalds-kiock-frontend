import { configureStore } from "@reduxjs/toolkit";
import eatSlice from "./eat-type";

const store = configureStore({
  reducer: { eat: eatSlice.reducer },
});

export default store;
