import React from 'react'

const Delivery = () => {
  return (
    <>
    <h1 className="lg:w-2/3 w-full px-8 sm:px-0 md:px-8 lg:px-0 mx-auto font-semibold md:text-xl">
        Delivery Details
      </h1>
          {/*   Name And Email */}
      <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 md:px-8 lg:px-0 items-end">
        <div class="flex-grow w-full">
          <label for="name" class="leading-7 text-sm text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative flex-grow w-full">
          <label for="email" class="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
        {/*   Address */}
      <div class="mx-auto lg:w-2/3 px-8 w-full sm:px-0 md:px-8 lg:px-0">
        <label for="Address" class="leading-7 text-sm text-gray-600">
          Address
        </label>
        <textarea
          type="address"
          id="Address"
          name="Address"
          class="w-full resize-none bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
      </div>
          {/*   Phone Number And Pincode */}
      <div class="flex lg:w-2/3 w-full px-8 sm:flex-row flex-col mx-auto sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 md:px-8 lg:px-0 items-end">
        <div class="flex-grow w-full">
          <label for="phone" class="leading-7 text-sm text-gray-600">
            Phone Number
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative flex-grow w-full">
          <label for="pincode" class="leading-7 text-sm text-gray-600">
            Pincode
          </label>
          <input
            type="number"
            id="pincode"
            name="pincode"
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      {/*   State And City */}
      <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 md:px-8 lg:px-0 items-end">
        <div class="flex-grow w-full">
          <label for="city" class="leading-7 text-sm text-gray-600">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative flex-grow w-full">
          <label for="state" class="leading-7 text-sm text-gray-600">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
    </>
  )
}

export default Delivery