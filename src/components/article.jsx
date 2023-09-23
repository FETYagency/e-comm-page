import { useContext, useState } from "react";
import Counter from "./micro-compos/counter";
import { extracter, deleteAct } from "../contexts/cartData";

export default function Article() {
  return (
    <article className="w-full p-[24px] pb-[88px] md:p-0">
      <h1 className="mb-[16px] text-xs font-bold uppercase leading-[normal] tracking-[1.846px] text-[#FF7E1B]">
        sneaker company
      </h1>
      <h2 className="mb-[16px] text-[28px] font-bold capitalize leading-8 text-[#1D2026]">
        fall limited edition sneakers
      </h2>
      <p className="mb-[24px] text-[15px] font-normal leading-[25px] text-[#69707D]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <Initializor
        price={"$125.00"}
        promotion={"50%"}
        originalPrice={"$250.00"}
      />
    </article>
  );
}
function Initializor({ price, promotion, originalPrice }) {
  let [units, setUnits] = useState(0);
  let handler = useContext(extracter);
  let delHandler = useContext(deleteAct);

  const forCart = {
    name: "fall limited edition sneakers",
    perUnit: "$125.00",
    units: units,
    totale: units * 125,
  };
  function handleUnits(type) {
    if (type === "plus") {
      setUnits(++units);
    } else if (type === "minus") {
      setUnits(units === 0 ? 0 : --units);
    }
  }
  return (
    <div className="grid gap-[16px]">
      <div className="flex items-center gap-[16px]">
        <span className="text-[28px] font-bold text-[#1D2026]">{price}</span>
        <span className="rounded-md bg-[#ffeee2] px-[8px] pb-[4px] pt-[7px] text-base font-bold leading-[normal] text-[#FF7E1B]">
          {promotion}
        </span>
        {Boolean(promotion) && (
          <span className="ml-auto text-base font-bold leading-[26px] text-[#B6BCC8] line-through">
            {originalPrice}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-[16px] md:flex-row md:flex-wrap">
        <Counter units={units} handleUnits={handleUnits} />
        <button
          onClick={(e) => {
            if (units > 0) handler(forCart);
            if (units === 0) delHandler(forCart.name);
          }}
          className="flex w-full flex-1 items-center justify-center gap-[16px] rounded-[10px] bg-[#FF7E1B] pb-[14px] pt-[20px] text-white shadow-[0px_20px_50px_-20px_#FF7E1B] transition-colors duration-[.3s] hover:bg-[#FFAB6A]"
        >
          <svg width={22} height={20} xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 002.717 0H.897a.896.896 0 100 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 002.717-2.717 2.72 2.72 0 00-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 00.817-.677l1.821-7.283a.897.897 0 00-.87-1.114zM6.358 18.208a.926.926 0 010-1.85.926.926 0 010 1.85zm10.015 0a.926.926 0 010-1.85.926.926 0 010 1.85zm2.021-7.243l-13.8.81-.57-6.341h15.753l-1.383 5.53z"
              fill="currentColor"
            />
          </svg>
          <p className="text-[16px] font-bold text-white">Add to cart</p>
        </button>
      </div>
    </div>
  );
}
