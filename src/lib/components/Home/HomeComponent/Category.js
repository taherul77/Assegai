import React from "react";

import Image from "next/image";
import image from "@/lib/assets/Product/1.jpg";
import image1 from "@/lib/assets/Product/2.png";
import image2 from "@/lib/assets/Product/3.png";
import image3 from "@/lib/assets/Product/4.jpg";
import image4 from "@/lib/assets/Product/5.jpg";
import image5 from "@/lib/assets/Product/6.jpg";
import image6 from "@/lib/assets/Product/7.jpg";
import image7 from "@/lib/assets/Product/8.jpg";
import image8 from "@/lib/assets/Product/9.png";
import image9 from "@/lib/assets/Product/10.jpg";
import image10 from "@/lib/assets/Product/11.jpg";
import image11 from "@/lib/assets/Product/12.jpg";
import image12 from "@/lib/assets/Product/13.jpg";
import image13 from "@/lib/assets/Product/14.jpg";
const Category = () => {
  return (
    <div>
      <div className="py-5 hidden lg:block">
        <div className="py-4">
          <h1 className=" pb-2 text-center text-black font-bold text-4xl">
            CATEGORY
          </h1>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2  mx-20 ">
          <div className=" relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md  ">
            <Image
              src={image}
              height={300}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
           <span className="absolute top-[-5px] lg:left-16 lg:w-36 p-2 bg-white  text-center items-center font-bold text-sm rounded-md text-black">
            NEW
          </span>
          </div>

          <div className=" relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md  ">
            <Image
              src={image1}
              height={300}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
            <span className="absolute top-[-5px]  lg:left-16 w-36 p-2 bg-white  text-center items-center font-bold text-sm rounded-md text-black">
            NEW
          </span>
          </div>

          <div className="relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md ">
            <Image
              src={image2}
              height={300}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
            <span className="absolute top-[-5px]  lg:left-16 w-36 p-2 bg-white  text-center items-center font-bold text-sm rounded-md text-black">
            NEW
          </span>
          </div>

          <div className=" relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md  ">
            <Image
              src={image3}
              height={300}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
           <span className="absolute top-[-5px]  lg:left-16 w-36 p-2 bg-white  text-center items-center font-bold text-sm rounded-md text-black">
            NEW
          </span>
          </div>

          <div className=" relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md  ">
            <Image
              src={image4}
              height={300}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
            <span className="absolute top-[-5px]  lg:left-16 w-36 p-2 bg-white  text-center items-center font-bold text-sm rounded-md text-black">
            NEW
          </span>
          </div>

          <div className=" relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md  ">
            <Image
              src={image5}
              height={300}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
            <span className="absolute top-[-5px]  lg:left-16 w-36 p-2 bg-white  text-center items-center font-bold text-sm rounded-md text-black">
            NEW
          </span>
          </div>

          <div className=" relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md  ">
            <Image
              src={image6}
              height={300}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
           <span className="absolute top-[-5px]  lg:left-16 w-36 p-2 bg-white  text-center items-center font-bold text-sm rounded-md text-black">
            NEW
          </span>
          </div>

          <div className=" relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md  ">
            <Image
              src={image7}
              height={400}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
            <span className="absolute top-[-5px]  lg:left-16 w-36 p-2 bg-white  text-center items-center font-bold text-sm rounded-md text-black">
            NEW
          </span>
          </div>
          <div className=" relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md  ">
            <Image
              src={image8}
              height={400}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
            <span className="absolute top-[-5px]  lg:left-16 w-36 p-2 bg-white  text-center items-center font-bold text-sm rounded-md text-black">
            NEW
          </span>
            {/* <div className="flex flex-col justify-between space-y-8">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
              >
                Read more
              </button>
            </div> */}
          </div>
          <div className=" relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md  ">
            <Image
              src={image9}
              height={400}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
           <span className="absolute top-[-5px]  lg:left-16 w-36 p-2 bg-white  text-center items-center font-bold text-sm rounded-md text-black">
            NEW
          </span>
          </div>
          <div className=" relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md  ">
            <Image
              src={image10}
              height={400}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
           <span className="absolute top-[-5px]  lg:left-16 w-36 p-2 bg-white  text-center items-center font-bold text-sm rounded-md text-black">
            NEW
          </span>
          </div>
          <div className=" relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md  ">
            <Image
              src={image11}
              height={400}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
           <span className="absolute top-[-5px]  lg:left-16 w-36 p-2 bg-white  text-center items-center font-bold text-sm rounded-md text-black">
            NEW
          </span>
          </div>
          <div className=" relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md  ">
            <Image
              src={image12}
              height={400}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
            <span className="absolute top-[-5px]  lg:left-16 w-36 p-2 bg-white  text-center items-center font-bold text-sm rounded-md text-black">
            NEW
          </span>
          </div>
          <div className=" relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md  ">
            <Image
              src={image13}
              height={400}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
           <span className="absolute top-[-5px]  lg:left-16 w-36 p-2 bg-white  text-center items-center font-bold text-sm rounded-md text-black">
            NEW
          </span>
          </div>
          <div className=" relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md  ">
            <Image
              src={image7}
              height={400}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
            <span className="absolute top-[-5px]  lg:left-16 w-36 p-2 bg-white  text-center items-center font-bold text-sm rounded-md text-black">
            NEW
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
