import React from "react"
import type { CardProps } from "../types.ts"

interface CardListProps{
    items:CardProps[]
}

const CardList = React.memo(({items}:CardListProps) => {
  return (
    <div>
    <ul className="flex flex-col gap-2 ">
      {
        items?.map((t)=>(
            <li key={t.id} className="flex flex-col bg-gray-500 p-2">
              <p>Name: {t.name}</p>
              <p>Price: {t.price} </p>
            </li>
        ))
      }
      </ul>
    </div>
  )
})

export default CardList
