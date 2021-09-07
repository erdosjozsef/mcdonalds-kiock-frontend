import { createSlice } from "@reduxjs/toolkit";

const eatSlice = createSlice({
  name: "eat",
  initialState: { eatType: 0 },
  reducers: {
    selectEatType(state, action) {
      state.type = action.payload.eatType;
    },
  },
});

export const eatActions = eatSlice.actions;

export default eatSlice;
