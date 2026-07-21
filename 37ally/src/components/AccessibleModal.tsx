import { useEffect, useRef, useState } from "react"

const AccessibleModal = () => { 
    const [open,setOpen]=useState<boolean>(false) 
    
    const closeButtonRef=useRef<HTMLButtonElement>(null) 

    useEffect(()=>{
        if(open){
            closeButtonRef.current?.focus()
        }
    },[open])

    useEffect(()=>{
        const handleKeyDown=(e:KeyboardEvent):void=>{
            if(e.key==='Escape'){
                setOpen(false)
            }
        }
        window.addEventListener('keydown',handleKeyDown)

       return ()=> window.removeEventListener('keydown',handleKeyDown)
    },[])

  return (
    <div>
        <button
        type="button"
         onClick={()=>setOpen(true)}>
           Open Modal 
        </button> 

        {open && (
          <div className="w-full bg-white text-black rounded-md p-2">
             <h2>Welcome</h2> 
              <p>This is accessible model.</p>
           <button 
           type="button" 
           ref={closeButtonRef}
           onClick={()=>setOpen(false)}  
           className="px-2 py-1 bg-red-500 rounded-md"
           >
           Close Model
          </button>
           </div>
            )} 
    </div>
  )
}

export default AccessibleModal
