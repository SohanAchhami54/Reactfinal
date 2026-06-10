import { createContext, useContext, useState } from "react";

const TaskContext=createContext({
  
})

const TaskProvider=({children})=>{
    const [task,setTask]=useState([])

    return (
        <TaskContext.Provider value={{task,setTask}}>
              {children}
        </TaskContext.Provider>
    )
}

const useTask=()=>{
    return useContext(TaskContext)
}

export {TaskProvider,useTask}