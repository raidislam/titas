import React from "react"
import { cn } from "../utils"

function Card2({ className }) {
  return (
    <div className={cn("bg-[#fff] rounded-lg shadow-[0_4px_10px_#00000029]", className)}>
      <div className="flex gap-[0.75vw] p-[0.26vw] items-stretch">
        <div className="w-[5.5vw]">
          <img className="w-full h-full object-cover rounded-lg" src="/images/profile.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-y-1 flex-1">
          <h4 className="text-back text-[1vw] font-bold tracking-[0.84px] mb-[0.4vw]">Eng. Md. Anisur Rahman</h4>
          <p className="text-[#202020] text-[0.5vw] font-medium mb-[0.1vw]">
            General Manager/Deputy Managing Director (DMD)
          </p>
          <p className="text-[#202020] text-[0.6vw] font-medium mb-[0.1vw]">
            Regional Marketing Division - Narayanganj
          </p>
          <p className="text-[#202020] text-[0.6vw] font-medium mb-[0.1vw]">01939921165970018, 41010000-04/317</p>
          <p className="text-[#202020] text-[0.6vw] font-medium mb-[0.1vw]">dmd.nganj@titasgas.org.bd</p>
        </div>
      </div>
    </div>
  )
}

export default Card2
