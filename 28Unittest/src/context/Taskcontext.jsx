import { createContext, useContext, useReducer } from "react";
import { taskReducer } from "./taskReducer";

const Taskcontext=createContext({}) 

const initialState=[
    {
    id:1,
    title:'learning python',
    task:'learning data science'
    }
]

const TaskProvider=({children})=>{ 
    const [state,dispatch]=useReducer(taskReducer,initialState)
    return (
        <Taskcontext.Provider  value={{state,dispatch}} >
             {children}
        </Taskcontext.Provider>
    )
}

const useTask=()=>{
    return useContext(Taskcontext)
}

export {TaskProvider,useTask}


