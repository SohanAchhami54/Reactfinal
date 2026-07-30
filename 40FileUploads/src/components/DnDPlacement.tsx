import { DragDropProvider } from "@dnd-kit/react"
import { useState } from "react"
import Draggable from "./Draggable"
import Droppable from "./Droppable"

const DnDPlacement = () => { 
    const [isPlaced,setIsPlaced]=useState(false) 
  return (
    <div>
      <DragDropProvider
        onDragEnd={(event)=>{    
          console.log('event',event)
          if(event.canceled) return 
          setIsPlaced(event.operation.target?.id===4)
        }}
      >
        {/* render out seperately from droppable  */}
         {!isPlaced &&  <Draggable id={1}/>}

         <Droppable id={4}>{isPlaced && <Draggable  id={1}/>}</Droppable>
      </DragDropProvider>
    </div>
  )
}
export default DnDPlacement
