import { nanoid } from 'nanoid'
import React, { useReducer, useState } from 'react'

       const initialState={
        task:'', 
        duedate:'',
        done:false,
        priority:'',
        editId:null,
        tasks:[]
    }

    function reducer(state,action){ 
        switch(action.type){

            case 'change':
                return {...state,[action.id]:action.value}

            case 'reset':
                return {...state, 
                    task:'',
                    duedate:'',
                    priority:'',
                    editId:null
                }

            case 'add':
                return {...state, 
                    tasks:[...state.tasks,{id:nanoid(),task:state.task,duedate:state.duedate,priority:state.priority,done:state.done,createdAt:new Date().toLocaleString()}]
                }


             case 'edit':
             return { ...state,
                task:action.payload.task,
                duedate:action.payload.duedate, 
                priority:action.payload.priority,
                editId:action.payload.id
            }

            case 'update':
                return {...state, 
                    tasks:state.tasks.map(t=>
                        t.id===state.editId
                        ?{...t,task:state.task,duedate:state.duedate,priority:state.priority,updateAt:new Date().toLocaleString()}
                        :t
                    )
                     
                }

             case 'deletion':
                return { ...state, 
                    tasks:state.tasks.filter(t=>t.id!==action.payload)
                }

            case 'toggle':
                return {...state, 
                    tasks:state.tasks.map(t=>t.id===action.payload?{...t,done:!t.done}:t)
                }

                default: 
                return 
        }
    }

    function useTaskManager(){
     const [state,dispatch]=useReducer(reducer,initialState)



    function deletion(id){
        const confirm=window.confirm('Are u sure want to delete')
        if(!confirm) return 
        dispatch({type:'deletion',payload:id})
    }
    
    function edit(t){
        dispatch({type:'edit',payload:t})
    }

    function toggle(id){
        dispatch({type:'toggle',payload:id})
    }



    
     const handleChange=(e)=>{
        console.log('the value of state is:',state)

        // const {id,value,name,type}=e.target 
        if(e.target.type==='radio'){
            dispatch({
                type:'change',
                id:e.target.name, 
                value:e.target.value
            })
        }else{
            dispatch({
                type:'change', 
                id:e.target.id, 
                value:e.target.value
            })
        }

    }

    return {state,dispatch,handleChange,deletion, edit,toggle}
}
   
export {useTaskManager}
