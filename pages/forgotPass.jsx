import Link from 'next/link'
import React from 'react'

const forgotpass = () => {
  return (
    <>
    <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Reset Password</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        <Link href="/signin" className="font-medium text-pink-600 hover:text-pink-500">Already have an account ?   Sign In</Link>
      </p>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="-space-y-px rounded-md shadow-sm">
          <input name="email" type="email" autocomplete="email" required className="relative block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" placeholder="Enter Your Email"/>
        </div>
      <div>
        <button type="submit" className="group relative flex w-full justify-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">
          Continue
        </button>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default forgotpass