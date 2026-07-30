import { useDroppable } from "@dnd-kit/react"
import type { ReactNode } from "react"

interface DroppableProps {
  id: number
  children: ReactNode
}

const Droppable = ({ id, children }: DroppableProps) => {
  const {ref, isDropTarget} = useDroppable({id})

  return (
    <div ref={ref}
      className="max-w-md h-28 p-3 border-2 border-gray-600 bg-gray-800 rounded-xl text-white"
    >
      {!children && (isDropTarget ? "You are over me" : "Drop here")}
      {children}
    </div>
  )
}

export default Droppable