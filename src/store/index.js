import { configureStore } from "@reduxjs/toolkit";
import eatSlice from "./eat-type";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    eat: eatSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
