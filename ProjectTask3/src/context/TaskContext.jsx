import { createContext, useContext, useEffect, useState } from "react";
import {nanoid} from 'nanoid'
const TaskContext=createContext({
  
})

const TaskProvider=({children})=>{
    const [task,setTask]=useState([])
    const [iseditable,setIsEditable]=useState(false)
    const [editid,setEditId]=useState('')

    const addTask=(input,description,priority)=>{
         const newTask={
            id:nanoid(),
            title:input,
            description:description,
            completed:false,
            priority:priority,
            createdAt:new Date().toDateString() + new Date().toTimeString().split('G')[0]
         }
         setTask(prev=>[...prev,newTask])
    }
     
    const toggleTask=(id)=>{
     setTask(prev=>
        prev.map(t=>
            t.id===id?{...t,completed:!t.completed}:t
        )
     )
    }

    const editTask=(id,updatefield)=>{
        setTask(prev=>
            prev.map(t=>
                t.id===id?{...t,...updatefield}:t
            )
        )
    }

    const deleteTask=(id)=>{
        setTask(prev=> 
            prev.filter(t=>
                t.id!==id
            )
        )
    }


    useEffect(()=>{
        const finaltask=JSON.parse(localStorage.getItem('tasks'))
        if(finaltask && finaltask.length>0){
             setTask(finaltask)
        }
    },[])
    useEffect(()=>{
      localStorage.setItem('tasks',JSON.stringify(task))   
    },[task])


  const value={task,setTask,addTask,toggleTask,editTask,deleteTask,iseditable,setIsEditable,editid,setEditId}
    return (
        <TaskContext.Provider value={value}>
              {children}
        </TaskContext.Provider>
    )
}

const useTask=()=>{
    return useContext(TaskContext)
}

export {TaskProvider,useTask}