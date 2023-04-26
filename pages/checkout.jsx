import Delivery from "../components/Delivery";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementItem, decrementItem } from "../slices/counterSlice";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { deleteCartItem} from "../slices/apiCallSlice";
import {load} from '@cashfreepayments/cashfree-js';
const checkout = () => {
  const dispatch = useDispatch();
  const checkoutData = useSelector((state) => state.apiCall.checkoutData);
  const subTotal = useSelector((state) => state.apiCall.checkoutSubTotal);
  // ? Initiating Payment...
  const initiatePayment = async () => {
    
  }
  return (
    <>
      <h1 className="font-semibold text-2xl text-center underline underline-offset-2 mb-3">
        Checkout
      </h1>
      <Delivery />
      <h1 className="lg:w-2/3 my-3 px-8 sm:px-0 md:px-8 lg:px-0 w-full mx-auto font-semibold text-xl">
        Review Item
      </h1>
      <div className="lg:w-2/3 w-full mx-auto px-8 sm:px-0 md:px-8 lg:px-0">
        <div className={`md:flex flex-wrap bg-pink-200 rounded-t`}>
          {/* Item Box */}
          {checkoutData.map((item) => (
            <div key={item._id} className="flex gap-2 w-full px-3 pt-2 md:w-3/6">
              {/* Titele ,Price,Qty. Box */}
              <div className="w-3/5 flex flex-col justify-between">
                <h1>{item.name}</h1>
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-xl">
                    &#8377; {item.price}
                  </div>
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
                <button
                  onClick={() => dispatch(deleteCartItem(item._id))}
                  className="w-full my-2 text-white bg-pink-500 border-0 p-1 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Delete
                </button>
              </div>
              {/* Image Box */}
              <div className="w-2/5">
                <img
                  className="object-contain rounded w-28 h-28"
                  src={item.img}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
        {checkoutData.length ? (
          <>
            <h1 className="font-medium text-xl pb-2 px-3 bg-pink-200 rounded-b">
              Subtotal &#8377;{subTotal}
            </h1>
              <button onClick={initiatePayment} className="w-full mt-2 text-white bg-pink-500 border-0 p-2 focus:outline-none hover:bg-pink-600 rounded text-lg">
                Proceed to Payment
              </button>
          </>
        ) : (
          <h1 className="font-semibold text-xl">Your Shopping Cart is Empty</h1>
        )}
      </div>
    </>
  );
};
export default checkout;
