import { createSlice } from "@reduxjs/toolkit";

const initailState = {
  activeHotDeals: 0,
  hotDealsData: [],
  activeNewProducts: 0,
};

const homeSlice = createSlice({
  name: "home",
  initialState: initailState,
  reducers: {
    updateHotDeals: (state, action) => {
      state.activeHotDeals = action.payload;
    },
    updateNewProductsSelector: (state, action) => {
      state.activeNewProducts = action.payload;
    },
    updateHotDealsData: (state, action) => {
      state.hotDealsData = action.payload;
    },
  },
});

export const { updateHotDeals, updateNewProductsSelector, updateHotDealsData } =
  homeSlice.actions;
export default homeSlice.reducer;
