import plus from "../../assets/icon-plus.svg";
import minus from "../../assets/icon-minus.svg";
import { useState } from "react";

export default function Counter({ handleUnits, units }) {
  return (
    <div className="flex items-center justify-between overflow-hidden rounded-[10px] bg-[#f6f8fd]">
      <button
        className="grid h-[56px] w-[56px] place-items-center"
        onClick={() => handleUnits("minus")}
      >
        <img src={minus} alt="" />
      </button>
      <p className="w-[56px] text-center text-base font-bold leading-[normal] text-[#1D2026]">
        {units}
      </p>
      <button
        className="grid h-[56px] w-[56px] place-items-center"
        onClick={() => handleUnits("plus")}
      >
        <img src={plus} alt="" />
      </button>
    </div>
  );
}
