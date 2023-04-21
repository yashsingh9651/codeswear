import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// ? Api Calling to get Cart Product...
export const apiCall = createAsyncThunk("apiCall", async () => {
  const res = await fetch("http://localhost:3000/api/getCartItem");
  const cartProductItem = await res.json();
  return cartProductItem.cartItem;
});
// ?  Adding Product to Cart...
export const addToCart = createAsyncThunk("addToCart", async (values) => {
  await fetch("http://localhost:3000/api/addToCart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  const res = await fetch("http://localhost:3000/api/getCartItem");
  const cartProductItem = await res.json();
  return cartProductItem.cartItem;
});
// ?  Deleting Product from Cart...
export const deleteCartItem = createAsyncThunk("deleteCartItem", async (id) => {
  await fetch("http://localhost:3000/api/deleteCartItem", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
  const res = await fetch("http://localhost:3000/api/getCartItem");
  const cartProductItem = await res.json();
  return cartProductItem.cartItem;
});
// ? Creating Slice...
const apiCallSlice = createSlice({
  name: "apiCall",
  initialState: {
    subTotal: 0,
    checkoutSubTotal: 0,
    cartData: [],
    checkoutData: [],
  },reducers:{
    cartBuyNow:state=>{
      state.checkoutData=state.cartData
      state.checkoutSubTotal=state.subTotal
    },slugBuyNow:(state,action)=>{
      let data = [];
      data.push(action.payload);
      state.checkoutData=data;
      state.checkoutSubTotal=action.payload.price;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(apiCall.fulfilled, (state, action) => {
      state.cartData = action.payload;
      let subT = 0;
      state.cartData.forEach((element) => {
        subT += element.quantity * element.price;
        state.subTotal = subT;
      });
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cartData = action.payload;
      let subT = 0;
      state.cartData.forEach((element) => {
        subT += element.quantity * element.price;
        state.subTotal = subT;
      });
    });
    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      state.cartData = action.payload;
      let subT = 0;
      state.cartData.forEach((element) => {
        subT += element.quantity * element.price;
        state.subTotal = subT;
      });
      state.checkoutData=state.cartData
      state.checkoutSubTotal=state.subTotal
    });
  },
});
export const {cartBuyNow,slugBuyNow} =apiCallSlice.actions;
export default apiCallSlice.reducer;