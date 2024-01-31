import React from "react";
import image from "@/lib/assets/Latest_Procucts/Toposar50mg.jpg";
import Image from "next/image";
const Category = () => {
  return (
    <div>
      <div className="bg-[#0a0a0a]">
        <div>
          <h1 className="pt-14 pb-2 text-center text-white font-bold text-4xl">
            Specialized Products
          </h1>
          <div
            style={{ flex: 1, height: "4px", backgroundColor: "rgb(153, 0,0)" }}
            className=" lg:mx-[500px] mx-12"
          ></div>
        </div>

        <div className="grid lg:grid-cols-4 pt-20 gap-10 lg:gap-5 lg:mx-24 mx-10 py-10">
          <div className=" rounded-md bg-white justify-center ">
            <Image
              src={image}
              height={400}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
            <div className="flex flex-col justify-between space-y-8">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
              >
                Read more
              </button>
            </div>
          </div>

          <div className=" rounded-md bg-white justify-center ">
            <Image
              src={image}
              height={400}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
            <div className="flex flex-col justify-between space-y-8">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
              >
                Read more
              </button>
            </div>
          </div>

          <div className=" rounded-md bg-white justify-center ">
            <Image
              src={image}
              height={400}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
            <div className="flex flex-col justify-between space-y-8">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
              >
                Read more
              </button>
            </div>
          </div>

          <div className=" rounded-md bg-white justify-center ">
            <Image
              src={image}
              height={400}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
            <div className="flex flex-col justify-between space-y-8">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
              >
                Read more
              </button>
            </div>
          </div>

          <div className=" rounded-md bg-white justify-center ">
            <Image
              src={image}
              height={400}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
            <div className="flex flex-col justify-between space-y-8">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
              >
                Read more
              </button>
            </div>
          </div>

          <div className=" rounded-md bg-white justify-center ">
            <Image
              src={image}
              height={400}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
            <div className="flex flex-col justify-between space-y-8">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
              >
                Read more
              </button>
            </div>
          </div>

          <div className=" rounded-md bg-white justify-center ">
            <Image
              src={image}
              height={400}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
            <div className="flex flex-col justify-between space-y-8">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
              >
                Read more
              </button>
            </div>
          </div>

          <div className=" rounded-md bg-white justify-center ">
            <Image
              src={image}
              height={400}
              width={300}
              alt=""
              className="object-cover object-center w-full"
            />
            <div className="flex flex-col justify-between space-y-8">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
