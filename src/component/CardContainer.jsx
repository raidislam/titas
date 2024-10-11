import React from "react"
import { cn } from "../utils"
import Card2 from "./Card2"

const CardContainer = ({ data }) => {
  const total = data?.cards || 0
  const cardsContent = data?.cardsContent

  // Group cardsContent by senior_order
  const groupedCards = cardsContent?.reduce((acc, card) => {
    const order = card.senior_order || 0
    if (!acc[order]) {
      acc[order] = []
    }
    acc[order].push(card)
    return acc
  }, {})

  // Sort the groups by senior_order
  const sortedGroups = Object.entries(groupedCards || {}).sort(([a], [b]) => a - b)

  return (
    <div
      className={cn("flex flex-col items-center w-full", {
        "scale-150": total <= 2,
      })}>
      {sortedGroups.map(([order, cards]) => (
        <div key={order} className="flex flex-wrap justify-center items-center gap-[1.82vw] w-full mb-8">
          {cards.map((cardInfo, index) => (
            <Card2 cardInfo={cardInfo} className="w-[30%]" key={index} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default CardContainer
