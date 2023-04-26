import Link from "next/link";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import Schema from "@/schema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
const signup = () => {
  const router = useRouter();
  // ? disallowing to go to signup page when logged in...
  useEffect(() => {
    if (localStorage.getItem('token')){
      router.push('/');
    }
  }, [])
  // ? Template
  const data = {
    name: "",
    email: "",
    password: "",
  };
  // ? Handeling Formik...
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: data,
    validationSchema: Schema,
    onSubmit: async (values, action) => {
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      let response = await res.json();
      if (response.success) {
        toast.success('Signup Successfully', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          router.push(`${process.env.NEXT_PUBLIC_HOST}/signin`);
        }, 1200);
        action.resetForm();
      }
      else{
        action.resetForm();
        toast.error(response.error, {
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
    },
  });
  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <ToastContainer/>
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up to create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <Link
                href="/signin"
                className="font-medium text-pink-600 hover:text-pink-500"
              >
                Already have an account ? Sign In
              </Link>
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
            method="POST"
          >
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="relative block w-full rounded-t-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full outline-none rounded-b-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                  placeholder="Enter Your Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-pink-500 group-hover:text-pink-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default signup;
