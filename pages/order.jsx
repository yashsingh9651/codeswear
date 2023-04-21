import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {subTotal} from '../slices/counterSlice';
const order = () => {
    const cartContent = useSelector(state => state.counter.cartContent);
    const total = useSelector(state => state.counter.total);
    const dispatch = useDispatch();
    // Total Cart Value...
  useEffect(() => {
    dispatch(subTotal())
  }, [,cartContent])
  return (
    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-3 py-8 mx-auto">
    <div class="mx-auto">
      <div class="w-full lg:w-8/12 lg:mx-auto mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Codeswear</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #7658</h1>
        <div class="flex items-center mb-4">
          <a class="w-[33.33%] text-lg">Name</a>
          <a class="w-[33.33%] text-center text-lg">Quantity</a>
          <a class="w-[33.33%] text-end text-lg">Total</a>
        </div>
        {cartContent.map((item)=><div key={item.id} class="flex items-center border-t border-gray-200 py-2">
          <span class="text-gray-500 w-[33.33%]">{item.name}</span>
          <span class="text-gray-900 text-center w-[33.33%]">{item.quantity}</span>
          <span class="text-gray-900 text-end w-[33.33%]">&#8377; {(item.quantity*item.price)}</span>
        </div>)}
        <h1 className='font-semibold text-xl'>SubTotal: &#8377; {total}</h1>
      </div>
    </div>
  </div>
</section>
  )
}

export default order