import Image from 'next/image';
import React from 'react';
import image from "@/lib/assets/Product/1.jpg"
import image1 from "@/lib/assets/Product/2.png"
import image2 from "@/lib/assets/Product/3.png"
import image3 from "@/lib/assets/Product/4.jpg"
import image4 from "@/lib/assets/Product/5.jpg"
import image5 from "@/lib/assets/Product/6.jpg"
import image6 from "@/lib/assets/Product/7.jpg"
import image7 from "@/lib/assets/Product/8.jpg"
import image8 from "@/lib/assets/Product/9.png"
import image9 from "@/lib/assets/Product/10.jpg"

const Latest = () => {
    return (
        <div className="">
        <div>
          <h1 className="pt-14 pb-2 text-center font-bold text-4xl">
            Latest Products
          </h1>
          <div
          style={{ flex: 1, height: "4px", backgroundColor: "rgb(153, 0,0)" }}
          className=" lg:mx-[540px] mx-12"
        ></div>
        </div>
        <div  className="grid lg:grid-cols-5 gap-5 pt-10 lg:mx-20 mx-5 py-10 ">
          <div className="border border-slate-950 relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md ">
            <Image
              src={image1}
              height={400}
              width={400}
              alt=""
              className="object-cover object-center "
            />
            <div className="flex flex-col justify-between space-y-8">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
              >
                TOPOSAR
              </button>
              
            </div>
            <div className=" px-5">
              <div className="flex pt-2">
                  <h1 className="text-md font-semibold  ">Generic Name: </h1>
                  <h2> Etoposide</h2>
              </div>
              <div className="flex pt-1"> 
                  <h1 className="text-md font-semibold ">Theraputic Name:</h1>
                  <h2 className="pb-10">Oncalogy</h2>
              </div>
            </div>
          </div>
  
          <div className="border border-slate-950 relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md ">
          <Image
              src={image2}
              height={400}
              width={400}
              alt=""
              className="object-cover object-center w-full"
            />
            <div className="flex flex-col justify-between space-y-8">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
              >
                TOPOSAR
              </button>
              
            </div>
            <div className=" px-5">
              <div className="flex pt-2">
                  <h1 className="text-md font-semibold  ">Generic Name: </h1>
                  <h2> Etoposide</h2>
              </div>
              <div className="flex pt-1"> 
                  <h1 className="text-md font-semibold ">Theraputic Name:</h1>
                  <h2 className="pb-10">Oncalogy</h2>
              </div>
            </div>
          </div>
  
          <div className="border border-slate-950 relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
          <Image
              src={image}
              height={400}
              width={400}
              alt=""
              className="object-cover object-center w-full"
            />
            <div className="flex flex-col justify-between space-y-8">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
              >
                TOPOSAR
              </button>
              
            </div>
            <div className=" px-5">
              <div className="flex pt-2">
                  <h1 className="text-md font-semibold  ">Generic Name: </h1>
                  <h2> Etoposide</h2>
              </div>
              <div className="flex pt-1"> 
                  <h1 className="text-md font-semibold ">Theraputic Name:</h1>
                  <h2 className="pb-10">Oncalogy</h2>
              </div>
            </div>
          </div>
  
          <div className="border border-slate-950 relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
          <Image
              src={image6}
              height={400}
              width={400}
              alt=""
              className="object-cover object-center w-full"
            />
            <div className="flex flex-col justify-between space-y-8">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
              >
                TOPOSAR
              </button>
              
            </div>
            <div className=" px-5">
              <div className="flex pt-2">
                  <h1 className="text-md font-semibold  ">Generic Name: </h1>
                  <h2> Etoposide</h2>
              </div>
              <div className="flex pt-1"> 
                  <h1 className="text-md font-semibold ">Theraputic Name:</h1>
                  <h2 className="pb-10">Oncalogy</h2>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
};

export default Latest;