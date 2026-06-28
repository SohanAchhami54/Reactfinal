import { createContext, useContext, useReducer } from "react";
import {nanoid} from 'nanoid'
const Cartcontext=createContext({})

export function cartReducer(state,action){
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items:[...state.items,{...action.payload,quantity:1}]
            }

            // const existingItem=state.items.find(i=>i.id===action.payload.id)

            // if(existingItem){
            //    return {
            //       ...state,
            //     items:state.items.map(i=>
            //         i.id===action.payload.id? 
            //         {...i,quantity:i.quantity+1}:i
            //     )}
            // }else{
            //     return {
            //         ...state,
            //         items:[...state.items,{...action.payload,quantity:1}]
            //     }
            // }

            case 'DELETE_FROM_CART':
                return {
                    ...state, 
                    items:state.items.filter(i=>i.id!==action.payload.id)
                }

        default:
            return state
    }
}

export const initialState={
    items:[
        {
            id:1,
            name:'Laptop',
            price:210000,
            quantity:1
        }
    ],
    discount:0,
}

const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(cartReducer,initialState)
    const addItem=()=>{
        dispatch({type:'ADD_TO_CART',payload:{id:nanoid(),name:'shoes',price:90000,quantity:1}})
    }
    const deleteItem=(id)=>{
        dispatch({type:'DELETE_FROM_CART',payload:{id}})
    }
    const totalCart= state.items.length
    
    return (
         <Cartcontext.Provider  value={{state, addItem,deleteItem,dispatch,totalCart}}>
            {children}       
         </Cartcontext.Provider>
    )
}

const useCart=()=>{
    return useContext(Cartcontext)
 
}

export {CartProvider,useCart}