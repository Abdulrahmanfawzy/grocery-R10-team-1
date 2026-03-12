import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      state.cart = action.payload;
    },
    removeFromCart: (state, action) => {},
    updateCart: (state, action) => {},
    clearCart: (state) => {},
  },
});

export const { addToCart, removeFromCart, updateCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
