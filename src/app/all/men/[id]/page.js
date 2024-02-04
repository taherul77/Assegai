import React from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import image from "@/lib/assets/Product/1.jpg";
import Image from "next/image";
import { TbCurrencyTaka } from "react-icons/tb";
import getMenSingleProduct from "@/lib/Api/getMenSingleProduct";
export default async function MenSingle({ params }) {
  const { id } = params;
const {data} = await getMenSingleProduct(id);

  return (
    <div>
      <div className="grid lg:grid-cols-2 lg:mx-32 mx-5 gap-10">
        <div>
          <Image height={650} width={550} src={data.image} alt="" />
        </div>
        <div>
          <div>
            <h1 className="font-bold text-2xl">
              Mens Premium Sports Active Wear T-shirt - Inferno
            </h1>
            <div className="flex  items-center text-xl font-bold  gap-2 py-2">
              <TbCurrencyTaka />
              <h2 className="text-xl font-bold">570</h2>
            </div>
          </div>

          <div>
            <h1>Select Size:</h1>
            <div className="pt-2 flex gap-5">
              <button className="text-center py-0.5 px-5 border border-black  hover:drop-shadow-xl hover:scale-105 hover:border-slate-500 ">
                M
              </button>
              <button className="text-center py-0.5 px-5 border border-black  hover:drop-shadow-xl hover:scale-105 hover:border-slate-500 ">
                L
              </button>
              <button className="text-center py-0.5 px-5 border border-black  hover:drop-shadow-xl hover:scale-105 hover:border-slate-500 ">
                XL
              </button>
            </div>
          </div>

          <div className="pt-5 flex gap-6">
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
            <h1 className="text-justify ">
              SmileZ Premium Quality Sports t-shirts are smooth and comfortable.
              The t-shirts are made with the finest quality polyester fabric,
              perfect for casual or sports wear.
            </h1>
            <h2 className="text-md font-bold pt-2">Detailed Specification:</h2>
            <ul className="ps-10">
              <div className="flex gap-2 items-center pt-2">
                <GoDotFill />
                <li className="">Finest quality Polyester</li>
              </div>
              <div className="flex gap-2 items-center">
                <GoDotFill />
                <li className="">Regular fit, Crew Neck Mid-weight, 145gsm.</li>
              </div>
              <div className="flex gap-2 items-center">
                <GoDotFill />
                <li className="">Sharp and long-lasting sublimation print</li>
              </div>
              <div className="flex gap-2 items-center">
                <GoDotFill />
                <li className="">Preshrunk to minimize shrinkage</li>
              </div>
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
                  <th className="px-5 lg:px-10 bg-gray-200">Chest (Round)</th>
                  <th className="px-5 lg:px-10 bg-gray-300">Length</th>
                  <th className="px-5 lg:px-10 bg-gray-200">Sleeve</th>
                </tr>
              </thead>
              <tbody className="border border-black gap-2">
                <tr>
                  <th className="bg-gray-300">M</th>
                  <th className="bg-gray-200">39</th>
                  <th className="bg-gray-300">27.5</th>
                  <th className="bg-gray-200">8.5</th>
                </tr>
              </tbody>
              <tbody className="border border-black gap-2">
                <tr>
                  <th className="bg-gray-300">L</th>
                  <th className="bg-gray-200">40.5</th>
                  <th className="bg-gray-300">28</th>
                  <th className="bg-gray-200">8.75</th>
                </tr>
              </tbody>
              <tbody className="border border-black gap-2">
                <tr>
                  <th className="bg-gray-300">XL</th>
                  <th className="bg-gray-200">43</th>
                  <th className="bg-gray-300">29</th>
                  <th className="bg-gray-200">9</th>
                </tr>
              </tbody>
              <tbody className="border border-black gap-2">
                <tr className="">
                  <th className="bg-gray-300">2XL</th>
                  <th className="bg-gray-200">45</th>
                  <th className="bg-gray-300">30</th>
                  <th className="bg-gray-200">9.25</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
