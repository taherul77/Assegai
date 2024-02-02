import Image from "next/image";
import React from "react";
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

const Latest = () => {
  return (
    <div className="">
      <div className="py-2">
        <h1 className="text-left  lg:mx-20 mx-5 justify-center font-bold text-2xl">
          Just For You
        </h1>
      </div>
      <div className="grid lg:grid-cols-6 gap-2 lg:mx-20 mx-5 justify-center py-2 ">
        <div className="relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
          <Image height={400} width={400} src={image} alt="" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white">
            NEW
          </span>
          <div className=" px-2">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-slate-900">
              Classic Black Sneakers
              </h5>
            </a>

            <div className="flex items-center">
              <p className="flex items-center text-[#F85606]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                <circle cx="16.5" cy="15.5" r="1" />{" "}
                <path d="M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5" />{" "}
                <path d="M8 11h6" />{" "}
              </svg>
              <span className="text-xl font-bold ">500</span>
              </p>
            </div>
            <span className="text-sm text-slate-900 line-through">800</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
