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
import { TbCurrencyTaka } from "react-icons/tb";

const Latest = () => {
  return (
    <div className="">
      <div className="py-2">
        <h1 className="text-left  lg:mx-20 mx-5 justify-center font-bold text-2xl">
          Just For You
        </h1>
      </div>
      <div className="grid lg:grid-cols-6 gap-2 lg:mx-20 pb-2 justify-center">
        <div className="relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
          <Image height={400} width={400} src={image} alt="" />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white">
            NEW
          </span>
          <div className="space-y-2">
            <div className="px-2">
              <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                Classic Black Sneakers
              </h5>

              <div className="flex items-center text-xl font-bold align-middle text-[#F85606]">
                <TbCurrencyTaka />
                <p className="text-xl font-bold ">480</p>
              </div>

              <div className="flex items-center text-sm text-slate-900  pb-2 gap-1 ">
                <div className="flex items-center line-through">
                  <TbCurrencyTaka />
                  <p className="text-sm ">800</p>
                </div>{" "}
                <span>-40%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
