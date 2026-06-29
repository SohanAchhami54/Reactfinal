import { beforeEach, describe, expect, it, test } from "vitest";
import { taskReducer } from "./taskReducer";
// import '@testing-library/jest-dom'

describe('taskReducer',()=>{
    let initialState 

    beforeEach(()=>{ //each test should be independent
        initialState=[
         {
           id:1,
           title:'learning python',
           task:'learning data science'
         }
        ]
    })
    

// add item 
  describe('add task', () => {
       test.each([
        {
           title:'js',
           task:'learn dom manipulation'
        },
        {
           title:'python',
           task:'learn machine learning'
        }
       ])('should add new Task',(newTask)=>{
           const action={type:'ADD_TASK',payload:newTask}
           const newState=taskReducer(initialState,action)

           expect(newState).toHaveLength(2) 
           expect(newState).toBeTruthy()
           expect(newState[1]).toEqual({
            id:expect.any(String),
            title:newTask.title,
            task:newTask.task,
            completed:false
           })
       })

    it('should add new task when empty',()=>{
        const newTask={
            title:'java',
            task:'learning spring boot'
        }
        const action={type:'ADD_TASK',payload:newTask}
        const newState=taskReducer([],action) 
        expect(newState).toHaveLength(1) 
        expect(newState[0].title).toBe('java')
        expect(newState[0].task).toBe('learning spring boot')
    })
 })


//  delete item 
   describe('delete task',()=>{
     it('delete task by id',()=>{
         const action={type:'DELETE_TASK',payload:{id:1}}
         const newState=taskReducer(initialState,action) 
         expect(newState).toHaveLength(0)
     })
     
     it('should return empty array when deleting from empty state',()=>{ //cover, remove from empty cart.
         const action={type:'DELETE_TASK',payload:{id:1}} 
         const newState=taskReducer([],action)

         expect(newState).toHaveLength(0) 
         expect(newState).toEqual([])
     })
   }) 
})