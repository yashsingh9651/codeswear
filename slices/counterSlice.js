import Product from '@/models/Product';
import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value:0,
    total:0,
    cart:false,
    cartContent:[{
      id:57958,
      name: 'Manually Added Product 1',
      price: 699,
      image:'https://m.media-amazon.com/images/I/61+KV3qFJWL._AC_UL480_FMwebp_QL65_.jpg',
      quantity:1
    },{
      id:579589,
      name: 'Manually Added Product 2',
      price: 399,
      image:'https://m.media-amazon.com/images/I/51E41jiRUpL._AC_UL480_FMwebp_QL65_.jpg',
      quantity:1
    },]
  },
  reducers: {
    handleCart:state => {
      state.cart = !state.cart
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    handleAddToCart: async (state, action) => {
      const cartItem = {
        id:Math.random(),
        title:'Manually added roduct',
        price: action.payload,
        image:'https://m.media-amazon.com/images/I/51E41jiRUpL._AC_UL480_FMwebp_QL65_.jpg',
        quantity:1
      }
      state.cartContent.push(cartItem);
      localStorage.setItem('cartContent', JSON.stringify(state.cartContent));
    },
    deleteCartItem:(state,action)=>{
      const index = state.cartContent.findIndex((item)=>item.id === action.payload);
      state.cartContent.splice(index,1);
    },subTotal:state=>{
      let subT = 0;
      state.cartContent.forEach(element => {
        subT += (element.price*element.quantity);
        state.total=subT;
      });
    },
    incrementItem: (state,action) =>{
      const index = state.cartContent.findIndex((item)=>item.id === action.payload);
      state.cartContent[index].quantity += 1; 
    },
    decrementItem: (state,action) =>{
      const index = state.cartContent.findIndex((item)=>item.id === action.payload);
      if(state.cartContent[index].quantity<=1){
        state.cartContent.splice(index,1);
      }
      else{
        state.cartContent[index].quantity -= 1;
      }
    },
  }
})
export const {handleCart,handleAddToCart,subTotal,incrementItem,incrementByAmount,deleteCartItem,decrementItem} = counterSlice.actions;
export default counterSlice.reducer;