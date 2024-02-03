"use client";
// Import necessary libraries and components
import Image from "next/image";
import { TbCurrencyTaka } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";
import getAllProduct from "@/lib/Api/getAllProduct";
import React, { useEffect, useState } from "react";
import image from "@/lib/assets/Product/1.jpg";


export default function Card() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProduct();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  // Render the Card component
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:mx-20 pb-2 space-y-8 justify-center px-2 lg:px-0">
        {products?.map((product) => (
          <div
            key={product._id}
            className="relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md"
          >
            <Image height={300} width={400} src={image} alt="" />
            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white">
              NEW
            </span>
            <div className="space-y-2">
              <div className="px-2">
                <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                  {product.name}
                </h5>
                <div className="flex items-center text-xl font-bold align-middle text-[#F85606]">
                  <TbCurrencyTaka />
                  <p className="text-xl font-bold ">{product.price}</p>
                </div>

                <div className="flex items-center text-sm text-slate-900 pb-1 gap-1">
                  <div className="flex items-center line-through">
                    <TbCurrencyTaka />
                    <p className="text-sm ">{product.discount_price}</p>
                  </div>{" "}
                  <span>-{product.discountPercentage}%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <button
                type="button"
                className="flex items-center justify-center w-full p-1 font-semibold bg-[#0b0b0b] text-white gap-2"
              >
                <AiOutlineShoppingCart /> <p>Buy Now</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
