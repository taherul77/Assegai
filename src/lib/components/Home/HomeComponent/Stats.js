import React from "react";
import { FaCarSide } from "react-icons/fa";
import { SlSupport } from "react-icons/sl";
import { FaExchangeAlt } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
const Stats = () => {
  return (
    <div className="bg-gray-100">
      <div className="grid lg:grid-cols-4 gap-10  lg:mx-20 py-10">
      <div className="flex items-center gap-5 ">
        <div className="border bg-slate-200 p-3 rounded-full">
          <FaCarSide />
        </div>
        <div>
          <h1 className="text-md font-semibold">FREE SHIPPING</h1>
          <h2 className="text-sm">BUY BDT 3000+ & GET FREE DELIVERY</h2>
        </div>
      </div>

      <div className="flex items-center gap-5 ">
        <div className="border bg-slate-200 p-3 rounded-full">
          <SlSupport />
        </div>
        <div>
          <h1 className="text-md font-semibold">SUPPORT</h1>
          <h2 className="text-sm">
            WHATSAPP: +880 1734454539  <br></br>
            CALL: +880 01734454539
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-5 ">
        <div className="border bg-slate-200 p-3 rounded-full">
          <FaExchangeAlt />
        </div>
        <div>
          <h1 className="text-md font-semibold">7 DAYS EXCHANGE</h1>
          <h2 className="text-sm">
            EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-5 ">
        <div className="border bg-slate-200 p-3 rounded-full">
          <GrSecure />
        </div>
        <div>
          <h1 className="text-md font-semibold">100% PAYMENT SECURE</h1>
          <h2 className="text-sm">
            CASH ON DELIVERY AND SECURED ONLINE PAYMENT
          </h2>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Stats;
