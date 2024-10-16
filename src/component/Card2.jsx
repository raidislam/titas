import React from "react"
import { cn } from "../utils"

function Card2({ cardInfo, className }) {
  const textColor = cardInfo?.text_color || "#202020"
  return (
    <div
      className={cn("bg-white rounded-lg shadow-[0_4px_10px_#00000029]", className)}
      style={{
        backgroundColor: cardInfo?.background_color,
        color: textColor,
        fontStyle: cardInfo?.font_name,
        fontSize: cardInfo?.font_size,
      }}>
      <div className="flex gap-[0.75vw] p-[0.26vw] items-stretch">
        <div className="w-[6.0vw] h-[7.5vw]">
          <img className="w-full h-full object-cover rounded-lg" src={cardInfo?.image} alt="" />
        </div>
        <div className="flex flex-col gap-y-1 flex-1">
          <h4 className={`text-[${textColor}] text-[0.7vw] font-bold tracking-[0.84px] mb-[0.4vw]`}>
            {cardInfo?.name}
          </h4>
          <p className={`text-[${textColor}] text-[0.6vw] font-medium mb-[0.1vw]`}>{cardInfo?.post}</p>
          <p className={`text-[${textColor}] text-[0.6vw] font-medium mb-[0.1vw]`}>{cardInfo?.rank}</p>
          {cardInfo?.code && (
            <p className={`text-[${textColor}] text-[0.6vw] font-medium mb-[0.1vw]`}>{cardInfo?.code}</p>
          )}
          <p className={`text-[${textColor}] text-[0.6vw] font-medium mb-[0.1vw]`}>{cardInfo?.phone.join(", ")}</p>
          <p className={`text-[${textColor}] text-[0.6vw] font-medium mb-[0.1vw]`}>{cardInfo?.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Card2
