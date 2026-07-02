import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

const initialState={
    todos:[
        {
            id:1, 
            title:'learn python',
            completed:false
        }
    ]
}

const todoSlice=createSlice({
    name:'todo',
    initialState, 
    reducers:{
        addTodo:(state,action)=>{
           state.todos.push({id:nanoid(),...action.payload})
        }, 

        updateTodo:(state,action)=>{
           state.todos= state.todos.map(t=>t.id===action.payload.id? 
                {...t,title:action.payload.title}:t
            )
        },

        deleteTodo:(state,action)=>{
          state.todos= state.todos.filter(t=>t.id!==action.payload.id)
        },

        toggleTodo:(state,action)=>{
           state.todos= state.todos.map(t=>t.id===action.payload.id? 
                {...t,completed:!t.completed}:t
            )
        }
    }
})

export const {addTodo,updateTodo,deleteTodo,toggleTodo}=todoSlice.actions 
export const todoReducer=todoSlice.reducer