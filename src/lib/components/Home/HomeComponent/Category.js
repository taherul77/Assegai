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
import getAllCategories from "@/lib/Api/getAllCategories";


export default async function Category() {
  const categories = await getAllCategories();
  
  return (
    <div>
    <div className="py-5 ">
      <div className="py-4">
        <h1 className=" pb-2 text-center text-black font-bold text-4xl">
          CATEGORY
        </h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 mx-2  lg:mx-20 ">
        {categories.map((categorie,index)=>{
          <div key={index} className="relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
          <Image
            src={image}
            height={300}
            width={300}
            alt=""
            className="object-cover object-center w-full"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="p-2 bg-white text-center w-36 font-bold text-sm rounded-md text-black">
            {categorie?.name}
            </span>
          </div>
        </div>
        })}


      </div>
    </div>
  </div>
  )
}




