import Link from "next/link";
import React,{useRef} from "react";
import {
  AiOutlineShoppingCart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";
const Navbar = () => {
  const cart = useRef();
  const toggleCart = () => {
    if(cart.current.classList.contains('translate-x-full')){
      cart.current.classList.remove('translate-x-full');
      cart.current.classList.add('translate-x-0');
    }
    else if(!cart.current.classList.contains('translate-x-full')){
      cart.current.classList.remove('translate-x-0');
      cart.current.classList.add('translate-x-full');
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between items-center justify-center">
        <div className="md:ml-10">
          <img className="w-44 md:w-72" src="/logo.webp" alt="" />
        </div>
        <div className="flex gap-3 text-xl md:text-3xl p-2 font-semibold items-center list-none md:mr-20">
          <Link href={"/tshirt"}>
            <li>T-shirt</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
        </div>
        <div className="absolute right-4 text-xl md:text-3xl text-pink-600 cursor-pointer">
          <AiOutlineShoppingCart onClick={toggleCart} />
        </div>
      </div>
      {/* Cart */}
      <div ref={cart} className="max-h-screen overflow-y-auto fixed p-5 top-0 right-0 bg-pink-200 transform transition-transform translate-x-full">
        <div className="absolute top-5 right-5 text-pink-600 cursor-pointer">
          <GiCrossMark onClick={toggleCart} />
        </div>
        <h1 className="font-semibold text-xl md:text-2xl my-2 underline underline-offset-2">
          Shopping Cart
        </h1>
        <div className="flex mt-2">
          <div className="w-3/4">Tshirt - Wear The Code</div>
          <div className="w-1/4 flex items-center gap-1 text-xl text-pink-500">
            <AiFillPlusCircle className="cursor-pointer"/>
            <div>1</div>
            <AiFillMinusCircle className="cursor-pointer"/>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="w-3/4">Tshirt - Wear The Code</div>
          <div className="w-1/4 flex items-center gap-1 text-xl text-pink-500">
            <AiFillPlusCircle className="cursor-pointer"/>
            <div>1</div>
            <AiFillMinusCircle className="cursor-pointer"/>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="w-3/4">Tshirt - Wear The Code</div>
          <div className="w-1/4 flex items-center gap-1 text-xl text-pink-500">
            <AiFillPlusCircle className="cursor-pointer"/>
            <div>1</div>
            <AiFillMinusCircle className="cursor-pointer"/>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="w-3/4">Tshirt - Wear The Code</div>
          <div className="w-1/4 flex items-center gap-1 text-xl text-pink-500">
            <AiFillPlusCircle className="cursor-pointer"/>
            <div>1</div>
            <AiFillMinusCircle className="cursor-pointer"/>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="w-3/4">Tshirt - Wear The Code</div>
          <div className="w-1/4 flex items-center gap-1 text-xl text-pink-500">
            <AiFillPlusCircle className="cursor-pointer"/>
            <div>1</div>
            <AiFillMinusCircle className="cursor-pointer"/>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="w-3/4">Tshirt - Wear The Code</div>
          <div className="w-1/4 flex items-center gap-1 text-xl text-pink-500">
            <AiFillPlusCircle className="cursor-pointer"/>
            <div>1</div>
            <AiFillMinusCircle className="cursor-pointer"/>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="w-3/4">Tshirt - Wear The Code</div>
          <div className="w-1/4 flex items-center gap-1 text-xl text-pink-500">
            <AiFillPlusCircle className="cursor-pointer"/>
            <div>1</div>
            <AiFillMinusCircle className="cursor-pointer"/>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="w-3/4">Tshirt - Wear The Code</div>
          <div className="w-1/4 flex items-center gap-1 text-xl text-pink-500">
            <AiFillPlusCircle className="cursor-pointer"/>
            <div>1</div>
            <AiFillMinusCircle className="cursor-pointer"/>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="w-3/4">Tshirt - Wear The Code</div>
          <div className="w-1/4 flex items-center gap-1 text-xl text-pink-500">
            <AiFillPlusCircle className="cursor-pointer"/>
            <div>1</div>
            <AiFillMinusCircle className="cursor-pointer"/>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="w-3/4">Tshirt - Wear The Code</div>
          <div className="w-1/4 flex items-center gap-1 text-xl text-pink-500">
            <AiFillPlusCircle className="cursor-pointer"/>
            <div>1</div>
            <AiFillMinusCircle className="cursor-pointer"/>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="w-3/4">Tshirt - Wear The Code</div>
          <div className="w-1/4 flex items-center gap-1 text-xl text-pink-500">
            <AiFillPlusCircle className="cursor-pointer"/>
            <div>1</div>
            <AiFillMinusCircle className="cursor-pointer"/>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="w-3/4">Tshirt - Wear The Code</div>
          <div className="w-1/4 flex items-center gap-1 text-xl text-pink-500">
            <AiFillPlusCircle className="cursor-pointer"/>
            <div>1</div>
            <AiFillMinusCircle className="cursor-pointer"/>
          </div>
        </div>
        <button class="flex mx-auto mt-10 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Checkout</button>
      </div>
    </>
  );
};
export default Navbar;
