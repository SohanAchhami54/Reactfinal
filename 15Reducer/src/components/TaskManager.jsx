import { nanoid } from 'nanoid'
import React, { useReducer, useState } from 'react'
import Tasklist from './Tasklist'

const TaskManager = () => {
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
    const initialState={
        task:'', 
        duedate:'',
        done:false,
        priority:'',
        editId:null,
        tasks:[]
    }
    const [state,dispatch]=useReducer(reducer,initialState)



    function add(){  

        dispatch({type:'add'})
    }

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
    const handleSubmit=(e)=>{
      e.preventDefault() 
      if(!state.task || !state.priority || !state.duedate){
        alert('All field are required')
      }else if(state.editId) {
        dispatch({type:'update'})
        dispatch({type:'reset'})
      }else {
        dispatch({type:'add'}) 
        dispatch({type:'reset'})
      } 
    }

  return (
    <div>
       <form onSubmit={handleSubmit} className='flex flex-wrap justify-around items-center border max-w-6xl mx-auto py-2'>
        <div className='flex  justify-center items-center gap-2'>
        <label htmlFor="task">Task:</label>
          <input type="text"
          placeholder='Enter the task'
          id='task'
          value={state.task} 
          onChange={handleChange}
          className=' px-2 py-1  w-80 border outline-none focus:ring-2'
           />
           </div>
         
         <div>
         <label htmlFor="hightask">High:</label>
         <input type="radio"
          name='priority'
           id='hightask'
           value='high' 
           checked={state.priority==='high'}
             onChange={handleChange}
            />
           
            
          
            <label htmlFor="mediumtask">Medium:</label>
         <input type="radio"
          name='priority'
           id='mediumtask'
           value='medium' 
           checked={state.priority==='medium'}
             onChange={handleChange}
            />
          

           
            <label htmlFor="lowtask">Low:</label>
         <input type="radio"
          name='priority'
           id='lowtask'
               value='low' 
               checked={state.priority==='low'} 
                 onChange={handleChange}
            />
            </div>
             
             <div>
             <label htmlFor="duedate">Date:</label>
            <input type="datetime-local"
            id='duedate' 
             value={state.duedate} 
                onChange={handleChange}
             />
             </div>
             <button>{state.editId?'Update':'Add'} </button>
       </form>
        <Tasklist task={state.tasks} deletion={deletion} edit={edit} toggle={toggle} />
    </div>
  )
}

export default TaskManager
