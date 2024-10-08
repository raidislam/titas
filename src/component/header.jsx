import React from "react"

export default function Header() {
  return (
    <div className="flex">
      <div className="w-[8vw]">
        <img className="w-full" src="/images/shadow-image.svg" alt="" />
      </div>
      <div className="text-center flex justify-center items-center flex-1">
        <div className="">
          <h2 className="text-[#202020] text-[1.75vw] font-bold tracking-wider mb-2 font-poppins">
            Titas Gas Transmission & Distribution PLC.
          </h2>
          <p className="text-[#1CC475] text-[1.35vw] font-poppins">General Manager/Deputy Managing Director (DMD)</p>
        </div>
      </div>
    </div>
  )
}
