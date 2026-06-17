import {createSlice} from '@reduxjs/toolkit'

const initialState={
   carts:[{
     id:1, 
     name:'MSI laptop',
     price:20000,
     country:'Taiwan',
     quantity:1
   }]  
}
const cartSlice=createSlice({
    name:'cart',
    initialState, 
    reducers:{
          add:(state,action)=>{
            const existingItem=state.carts.find(i=>i.id===action.payload.id)
            if(existingItem){
                existingItem.quantity+=1
            }else{
                state.carts.push({...action.payload,quantity:1})
            }
          },
          deletion:(state,action)=>{
             state.carts=state.carts.filter(i=>i.id!==action.payload.id)
          },
          reset:(state)=>{
             state.carts=[]
          }
    }
})

export const {add,deletion,reset}=cartSlice.actions 
export const cartReducer=cartSlice.reducer