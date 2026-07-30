import { useDraggable } from "@dnd-kit/react"

interface DragProps{
    id:number
}
const Draggable = ({id}:DragProps) => { 
    const {ref}=useDraggable({id})
   return (
    <div>
      <button ref={ref} className="px-2 py-2 bg-purple-500 rounded-md">Draggable</button>
    </div>
  )
}

export default Draggable
