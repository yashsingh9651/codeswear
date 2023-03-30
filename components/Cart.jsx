import React, { useEffect, useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";
import { useSelector, useDispatch } from 'react-redux';
import { handleCart,deleteCartItem,incrementItem,decrementItem} from '../slices/counterSlice';
const Cart = () => {
  const Cart = useSelector(state => state.counter.cart);
  const cartContent = useSelector(state => state.counter.cartContent);
  const dispatch = useDispatch();
  // Adding Total Cart Value...
  const [total, setTotal] = useState(0);
  const subTotal = () => {
    let subT = 0;
    cartContent.forEach(element => {
      subT += (element.price*element.quantity);
      setTotal(subT);
    });
  }
  useEffect(() => {
    subTotal();
  }, [,cartContent])
  return (
    <div className={`max-h-screen z-50 overflow-y-auto max-w-full md:max-w-[30%] fixed p-5 top-0 right-0 bg-pink-200 transform transition-transform ${!Cart?'translate-x-full':'translate-x-0'} duration-500`}>
      <div className="absolute top-5 right-5 text-pink-600 cursor-pointer">
        <GiCrossMark onClick={()=>dispatch(handleCart())} />
      </div>
      {cartContent.length?<>
        <h1 className="font-medium text-xl my-2 underline underline-offset-2">
          Subtotal &#8377;{total}
        </h1>
        <button className="w-full mt-2 text-white bg-pink-500 border-0 p-2 focus:outline-none hover:bg-pink-600 rounded text-lg">
          Proceed to Buy ({cartContent.length} items)
        </button>
      </>:<h1 className="mt-5 font-semibold text-xl">Your Shopping Cart is Empty</h1>}
      {/* Item Box */}
      {cartContent.map((item)=><div key={item.id} className="flex mt-2 gap-2">
        {/* Titele ,Price,Qty. Box */}
        <div className="w-3/5 flex flex-col justify-between">
          <h1>{item.name}</h1>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-xl">&#8377; {item.price}</div>
            <div className="flex items-center gap-1 text-xl text-pink-500">
              <AiFillPlusCircle
                onClick={() => dispatch(incrementItem(item.id))}
                className="cursor-pointer"
              />
              <div>{item.quantity}</div>
              <AiFillMinusCircle
                onClick={() => dispatch(decrementItem(item.id))}
                className="cursor-pointer"
              />
            </div>
          </div>
          <button onClick={()=>dispatch(deleteCartItem(item.id))} className="w-full my-2 text-white bg-pink-500 border-0 p-1 focus:outline-none hover:bg-pink-600 rounded">
            Delete
          </button>
        </div>
        {/* Image Box */}
        <div className="w-2/5">
          <img
            className="object-cover rounded w-28 h-28"
            src={item.image}
            alt=""
          />
        </div>
      </div>)}
    </div>
  );
};

export default Cart;
