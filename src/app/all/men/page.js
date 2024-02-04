import getMenProduct from "@/lib/Api/getMenProduct";
import MenCard from "@/lib/components/Product/MenCard";
import React from "react";

export default async function Men() {
  const { data } = await getMenProduct();

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 justify-center lg:mx-20 mx-5 ">
        <MenCard data={data} />
      </div>
    </div>
  );
}
