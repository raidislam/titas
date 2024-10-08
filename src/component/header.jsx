import React from "react";

export default function Header() {
  return (
    <div className="flex items-center gap-[120px]">
      <div className="w-[180px]">
        <img className="w-full" src="/images/shadow-image.svg" alt="" />
      </div>
      <div className="text-center">
        <h2 className="text-[#202020] text-4xl font-bold tracking-wider mb-2">
          Titas Gas Transmission & Distribution PLC.
        </h2>
        <p className="text-[#1CC475] text-3xl">
          General Manager/Deputy Managing Director (DMD)
        </p>
      </div>
    </div>
  );
}
