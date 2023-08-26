import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    cartReducer: cartSlice,
    userReducer: userSlice
  },
});

export default store;