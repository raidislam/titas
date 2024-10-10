import React from "react";
import { cn } from "../utils";

function Card2({ cardInfo, className }) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-[0_4px_10px_#00000029]",
        className
      )}
      style={{
        backgroundColor: cardInfo?.background_color,
      }}
    >
      <div className="flex gap-[0.75vw] p-[0.26vw] items-stretch">
        <div className="w-[5.5vw]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={cardInfo?.image}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-y-1 flex-1">
          <h4 className="text-back text-[0.9vw] font-bold tracking-[0.84px] mb-[0.4vw]">
            {cardInfo?.name}
          </h4>
          <p className="text-[#202020] text-[0.5vw] font-medium mb-[0.1vw]">
            {cardInfo?.post}
          </p>
          <p className="text-[#202020] text-[0.6vw] font-medium mb-[0.1vw]">
            {cardInfo?.rank}
          </p>
          {/* {cardInfo?.city && <p className="text-[#202020] text-[0.6vw] font-medium mb-[0.1vw]">{cardInfo?.city}</p>} */}
          <p className="text-[#202020] text-[0.6vw] font-medium mb-[0.1vw]">
            {cardInfo?.code}
          </p>
          <p className="text-[#202020] text-[0.6vw] font-medium mb-[0.1vw]">
            {" "}
            {cardInfo?.phone}
          </p>
          <p className="text-[#202020] text-[0.6vw] font-medium mb-[0.1vw]">
            {cardInfo?.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card2;
