import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quatity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quatity += 1;
      state.total += action.payload.price * action.payload.quatity;
    },
    reset: (state) => {
      state.products = [];
      state.quatity = 0;
      state.total += 0;
    },
  },
});

export const {addProduct, reset} = cartSlice.actions;
export default cartSlice.reducer;

