import Link from "next/link";
import React, { useEffect} from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { apiCall } from "../slices/apiCallSlice";
import { deleteCartItem,cartBuyNow } from "../slices/apiCallSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  handleCart,
  incrementItem,
  decrementItem,
} from "../slices/counterSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.counter.cart);
  const cartProduct = useSelector((state) => state.apiCall.cartData);
  const subTotal = useSelector((state) => state.apiCall.subTotal);
  // ? Delete Cart Item
  const deleteCart = (id) => {
    dispatch(deleteCartItem(id));
    toast.error("Item Removed From Cart", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  // ? Showing Cart Item
  useEffect(() => {
    dispatch(apiCall());
  }, []);
  return (
    <div
      className={`max-h-screen z-50 overflow-y-auto max-w-full md:max-w-[30%] fixed p-5 top-0 right-0 bg-pink-200 transform transition-transform ${
        !Cart ? "translate-x-full" : "translate-x-0"
      } duration-500`}
    >
      <div className="absolute top-5 right-5 text-pink-600 cursor-pointer">
        <GiCrossMark onClick={() => dispatch(handleCart())} />
      </div>
      {cartProduct.length ? (
        <div>
          <h1 className="font-medium text-xl my-2 underline underline-offset-2">
            Subtotal &#8377;{subTotal}
          </h1>
          <Link onClick={()=>dispatch(cartBuyNow())} href={"/checkout"}>
            <button className="w-full mt-5 text-white bg-pink-500 border-0 p-2 focus:outline-none hover:bg-pink-600 rounded text-lg">
              Proceed to Buy ({cartProduct.length} items)
            </button>
          </Link>
        </div>
      ) : (
        <h1 className="mt-5 font-semibold text-xl">
          Your Shopping Cart is Empty
        </h1>
      )}
      {/* Item Box */}
      {cartProduct.map((item) => (
        <div key={item._id} className="flex mt-2 gap-2">
          {/* Title ,Price,Qty. Box */}
          <div className="w-3/5 flex flex-col justify-between">
            <h1>{item.title}</h1>
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
            <button
              onClick={() => deleteCart(item._id)}
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
  );
};
export default Cart;
