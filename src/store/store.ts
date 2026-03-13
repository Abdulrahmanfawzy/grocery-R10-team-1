import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import homeReducer from "./slices/homeSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    home: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
