import Link from "next/link";
import React from "react";
import { useDispatch } from 'react-redux';
import { handleCart } from '../slices/counterSlice';
import {AiOutlineShoppingCart} from "react-icons/ai";
import {VscAccount} from "react-icons/vsc";
import Cart from "./Cart";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between items-center justify-center">
        <div className="md:ml-10">
          <img className="w-44 md:w-72" src="/logo.webp" alt="" />
        </div>
        <div className="flex gap-3 text-xl md:text-3xl p-2 font-semibold items-center list-none md:mr-28">
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
        <div className="absolute right-4 text-xl md:text-3xl text-pink-600 cursor-pointer flex gap-2">
          <Link href={'/signin'}>
            <VscAccount title="Account"/>
          </Link>
          <AiOutlineShoppingCart title="Cart" onClick={()=>dispatch(handleCart())}/>
        </div>
      </div>
      {/* Cart Box */}
      <Cart/>
    </>
  );
};
export default Navbar;
