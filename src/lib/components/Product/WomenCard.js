import Image from "next/image";
import { TbCurrencyTaka } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

export default function WomenCard( {data}) {
 
  return (
   <>
   {data?.map((product) => (
      <Link
        href={`men/${product._id}`}
        key={product._id}
        className="relative block w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md"
      >
        <Image height={300} width={400} src={product?.image} alt="" />
        <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center font-bold text-sm text-white">
          NEW
        </span>
        <div className="space-y-2">
          <div className="px-2">
            <h5 className="text-xl font-semibold tracking-tight text-slate-900">
              {product?.name?.length > 20
                ? `${product?.name?.slice(0, 20)}...`
                : product?.name}
            </h5>
            <div className="flex items-center text-xl font-bold align-middle text-[#F85606]">
              <TbCurrencyTaka />
              <p className="text-xl font-bold ">{product?.price}</p>
            </div>

            <div className="flex items-center text-sm text-slate-900 pb-1 gap-1">
              <div className="flex items-center line-through">
                <TbCurrencyTaka />
                <p className="text-sm ">{product?.discountedPrice}</p>
              </div>{" "}
              <span>
                -{product?.discountPercentage}%
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <button
            type="button"
            className="flex items-center justify-center w-full p-1 font-semibold bg-[#0b0b0b] text-white gap-2"
          >
            <AiOutlineShoppingCart /> <p>Buy Now</p>
          </button>
        </div>
      </Link>
    ))}
   
   
   </>
  );
}
