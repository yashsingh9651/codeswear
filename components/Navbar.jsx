import Link from "next/link";
import React,{ useState } from "react";
import { useDispatch} from 'react-redux';
import { handleCart} from '../slices/counterSlice';
import {AiOutlineShoppingCart} from "react-icons/ai";
import {VscAccount} from "react-icons/vsc";
import Cart from "./Cart";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = ({user}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);
  // ? handling Logout Button...
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    router.push(`${process.env.NEXT_PUBLIC_HOST}/signin`);
    toast.success("Logged Out Successfully", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  // const name = localStorage.getItem('name');
  return (
    <>
    <ToastContainer/>
      <div className="flex flex-col md:flex-row md:justify-between items-center justify-center">
        <Link href={'/'} className="md:ml-10">
          <img className="w-44 md:w-72" src="/logo.webp" alt="" />
        </Link>
        <div className="flex gap-3 text-xl md:text-2xl text-pink-400 p-2 font-semibold items-center list-none md:mr-28">
          <Link href={"/tshirt"}>
            <li className="hover:text-pink-600 underline underline-offset-2 hover:no-underline">T-shirt</li>
          </Link>
          <Link href={"/mugs"}>
            <li className="hover:text-pink-600 underline underline-offset-2 hover:no-underline">Mugs</li>
          </Link>
          <Link href={"/hoodies"}>
            <li className="hover:text-pink-600 underline underline-offset-2 hover:no-underline">Hoodies</li>
          </Link>
        </div>
        <div className="absolute right-4 text-xl md:text-3xl text-pink-600 cursor-pointer flex gap-2">
          {user.value?<button>
            <VscAccount onClick={()=>setDropdown(!dropdown)} title="Account"/>
          </button>:<Link href={'/signin'} className="text-lg bg-pink-600 rounded-md text-white px-2">Login</Link>}
          <AiOutlineShoppingCart title="Cart" onClick={()=>dispatch(handleCart())}/>
        </div>
        {/* Dropdown Box */}
      {dropdown&&<div onClick={()=>setDropdown(false)} className="absolute bg-pink-500 right-0 top-14 lg:w-1/6 px-2 py-1 rounded-l text-lg text-white">
          <h1>Hello! {name}</h1>
          <h1>
            <Link href={'/orders'}>My Orders</Link>
          </h1>
          <h1>
            <button onClick={()=>handleLogout()}>LogOut</button>
          </h1>
        </div>}
      </div>
      {/* Cart Box */}
      <Cart/>
    </>
  );
};
export default Navbar;
