import { useContext } from "react";
import { products, deleteAct } from "../contexts/cartData";
import thumb from "../assets/image-product-1-thumbnail.jpg";
import garbage from "../assets/icon-delete.svg";
export default function Cart() {
  let content = useContext(products);
  let handler = useContext(deleteAct);
  return (
    <div className="absolute left-[50%] top-[85px] w-[95%] translate-x-[-50%] rounded-[10px] bg-white shadow-[0px_20px_50px_-20px_rgba(29,32,38,0.50)] md:left-auto md:right-0 md:w-[360px] md:translate-x-0">
      <div className="border-b border-[#E4E9F2] py-[25px] pl-[24px]">
        <h3>Cart</h3>
      </div>
      {content.length > 0 ? (
        <div className="flex flex-col gap-[26px] p-[24px] ">
          {content.map((per) => {
            return (
              <figure className="flex items-center justify-between gap-[16px]">
                <div className="h-[50px] w-[50px]">
                  <img src={thumb} className="rounded-[4px]" />
                </div>
                <figcaption>
                  <h3 className="text-base font-normal leading-[26px] text-[#69707D]">
                    {per.name}
                  </h3>
                  <div className="flex gap-1">
                    <span className="text-base font-normal leading-[26px] text-[#69707D]">
                      {per.perUnit}
                    </span>
                    <span className="text-base font-normal leading-[26px] text-[#69707D]">
                      x
                    </span>
                    <span className="text-base font-normal leading-[26px] text-[#69707D]">
                      {per.units}
                    </span>
                    <span className="text-base font-bold leading-[26px] text-[#1D2026]">
                      ${per.totale}.00
                    </span>
                  </div>
                </figcaption>
                <button onClick={() => handler(per.name)}>
                  <img src={garbage} />
                </button>
              </figure>
            );
          })}
          <button className="h-[56px] w-full rounded-[10px] bg-[#FF7E1B] text-[16px] font-bold capitalize text-white hover:bg-[#FFAB6A]">
            checkout
          </button>
        </div>
      ) : (
        <div className="grid min-h-[188px] place-items-center">
          <p>Your cart is empty.</p>
        </div>
      )}
    </div>
  );
}
