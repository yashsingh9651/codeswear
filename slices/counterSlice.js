import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    cart: false,
  },
  reducers: {
    handleCart: (state) => {
      state.cart = !state.cart;
    },
  },
});
export const { handleCart } = counterSlice.actions;
export default counterSlice.reducer;
