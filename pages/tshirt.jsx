import Link from "next/link";
const mongoose = require("mongoose");
import Product from "../models/Product";
import React from "react";
const tshirt = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap">
            {Object.keys(products).map((item) => (
              <div key={item._id} className="lg:w-1/5 md:w-1/2 md:p-4 p-1 w-3/6">
                <a>
                  <img
                    alt="ecommerce"
                    className="rounded object-contain w-full h-[160px] md:h-[334px] lg:h-[260px] xl:h-[334px]"
                    src={products[item].img}
                  />
                </a>
                <div className="mt-4">
                  <h1
                    href={`product/${products[item].slug}`}
                    className="text-gray-500 text-xs tracking-widest title-font mb-1"
                  >
                    {products[item].category}
                  </h1>
                  <Link
                    href={`product/${products[item].slug}`}
                    className="text-gray-900 title-font text-lg font-medium"
                  >
                    {products[item].title}
                  </Link>
                  <p className="my-1">&#8377; {products[item].price}</p>
                  <h1>
                    {products[item].size.includes("s") && (
                      <span className="px-1 text-center border border-gray-400 mr-1">
                        S
                      </span>
                    )}
                    {products[item].size.includes("m") && (
                      <span className="px-1 text-center border border-gray-400 mr-1">
                        M
                      </span>
                    )}
                    {products[item].size.includes("l") && (
                      <span className="px-1 text-center border border-gray-400 mr-1">
                        L
                      </span>
                    )}
                    {products[item].size.includes("xl") && (
                      <span className="px-1 text-center border border-gray-400 mr-1">
                        XL
                      </span>
                    )}
                    {products[item].size.includes("xxl") && (
                      <span className="px-1 text-center border border-gray-400">
                        XXL
                      </span>
                    )}
                  </h1>
                  <h1 className="mt-1">
                    {products[item].color.includes("red") && (
                      <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    )}
                    {products[item].color.includes("black") && (
                      <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                    )}
                    {products[item].color.includes("white") && (
                      <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>
                    )}
                    {products[item].color.includes("blue") && (
                      <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    )}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export async function getServerSideProps(context) {
  await mongoose.connect(`mongodb://${process.env.MONGO_URI}/codeswear`);
  let products = await Product.find({ category: "tshirt" });
  let tshirtSizes = {};
  for (let item of products) {
    if (item.title in tshirtSizes) {
      if (
        !tshirtSizes[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        tshirtSizes[item.title].color.push(item.color);
      }
      if (
        !tshirtSizes[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirtSizes[item.title].size.push(item.size);
      }
    } else {
      if (item.color) {
        tshirtSizes[item.title] = JSON.parse(JSON.stringify(item));
      }
      if (item.availableQty > 0 && item.color) {
        tshirtSizes[item.title].color = [item.color];
        tshirtSizes[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(tshirtSizes)) },
  };
}
export default tshirt;
