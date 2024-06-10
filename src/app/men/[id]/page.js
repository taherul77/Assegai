import React from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

import Image from "next/image";
import { TbCurrencyTaka } from "react-icons/tb";
import getMenSingleProduct from "@/lib/Api/getMenSingleProduct";
export default async function MenSingle({ params }) {
  const { id } = params;
  const { data } = await getMenSingleProduct(id);
  const { p_size, p_des_specification } = data;

  return (
    <div>
      <div className="grid lg:grid-cols-2 lg:mx-32 mx-5 gap-5">
        <div>
          <Image height={650} width={550} src={data.image} alt="" />
        </div>
        <div>
          <div className="">
            <h1 className="font-bold text-2xl">{data?.name}</h1>
            <div className="flex  items-center text-xl font-bold  gap-2 py-2">
              <div className="flex items-center  line-through">
                <TbCurrencyTaka />
                <h2 className="text-sm">{data?.discountedPrice}</h2>
              </div>
              <div className="flex items-center text-xl">
                <TbCurrencyTaka />
                <h2 className="text-xl font-bold">{data?.price}</h2>
              </div>
            </div>
          </div>

          <div className="my-2">
            <h1>Select Size:</h1>
            <div className="pt-2 flex gap-5">
              {p_size?.map((size, index) => (
                <button
                  key={index}
                  className="text-center py-0.5 px-5 border border-black  hover:drop-shadow-xl hover:scale-105 hover:border-slate-500 "
                >
                  {size.size}
                </button>
              ))}
            </div>
          </div>

          <div className=" flex gap-6">
            <div className="flex items-center border border-black px-4">
              <FaMinus />
              <h1 className="text-xl px-5">1</h1>
              <FaPlus />
            </div>
            <div className="bg-gray-800 hover:bg-black flex items-center">
              <button className="text-white py-0.5 lg:px-5 px-5 text-lg">
                Add To Card
              </button>
            </div>
          </div>

          <div className="pt-4">
            <h1 className="text-justify ">{data?.p_description}</h1>
            <h2 className="text-md font-bold pt-2">Detailed Specification:</h2>
            <ul className="ps-10">
              {p_des_specification?.map((size, index) => (
                <div key={index} className="flex gap-2 items-center pt-2">
                  <GoDotFill />
                  <li className="">{size.specification}</li>
                </div>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-md font-bold pt-2 mb-3">
              Size chart - In inches (Expected Deviation 3%)
            </h2>
            <table>
              <thead className="border border-black gap-2">
                <tr>
                  <th className="px-5 lg:px-10 bg-gray-300">Size</th>
                  <th className="px-5 lg:px-10 bg-gray-200">Waist</th>
                  <th className="px-5 lg:px-10 bg-gray-300">Length</th>
                  
                </tr>
              </thead>
              {p_size?.map((size, index) => (
                <tbody key={index} className="border border-black gap-2">
                  <tr>
                    <th className="bg-gray-300">{size.size}</th>
                    <th className="bg-gray-200">{size.waist}</th>
                    <th className="bg-gray-300">{size.length}</th>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
