import Product from "@/models/Product";
import mongoose from "mongoose";
import Link from "next/link";
import React from "react";
const hoodies = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap">
            {products.map((item) => (
              <div key={item._id} className="lg:w-1/5 md:w-1/2 md:p-4 p-1 w-3/6">
                <a>
                  <img
                    alt="ecommerce"
                    className="rounded object-contain w-full h-[160px] md:h-[334px] lg:h-[260px] xl:h-[334px]"
                    src={item.img}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.category}
                  </h3>
                  <Link href={`product/${item.slug}`}>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.title}
                    </h2>
                  </Link>
                  <p className="mt-1">&#8377; {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export async function getServerSideProps(context){
  await mongoose.connect(`mongodb://${process.env.MONGO_URI}/codeswear`);
  let products = await Product.find({ category: "hoodie" });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}
export default hoodies;