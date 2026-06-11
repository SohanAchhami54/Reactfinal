import { nanoid } from "nanoid";
import { createContext, useContext, useReducer } from "react";

const CardStateContext=createContext({
    items:[], 
    cartitems:[],
    totalprice:()=>{},
    totalQuantity:()=>{}

})
const CardDispatchContext=createContext({
    add: () => {},
    addtocart: () => {},
    removecart: () => {},
    removeitem: () => {},
    clear: () => {},
    changeQuantity: () => {},
})

  function cardReducer(state,action){

       switch(action.type){
          case 'ADD':
            return {
                ...state, 
                items:[...state.items,{id:nanoid(),...action.payload,quantity:1}]
            }

            case 'ADDTOCART':{
                const existingItemincard=state.cartitems.find(i=>i.id===action.payload.id)
                
                if(existingItemincard){
                    return {
                        ...state, 
                        cartitems:state.cartitems.map((i)=>(
                            i.id===action.payload.id?{...i,quantity:i.quantity+1}:i
                        ))
                    }
                }else {

                return {
                    ...state, 
                     cartitems:[...state.cartitems,{...action.payload,quantity:1}]
                }
            }
        }
            

            case 'REMOVECART': 
            return {
                ...state, 
                cartitems:state.cartitems.filter(i=>i.id!==action.payload.id)
            }

             case 'REMOVEITEM': 
            return {
                ...state, 
                items:state.items.filter(i=>i.id!==action.payload.id)
            }
            
            case 'CLEAR':
                return {
                   ...state, 
                   cartitems:[] 
                }

            case 'CHANGEQUANTITY':
                return {
                    ...state,
                      cartitems:state.cartitems.map((i)=>(
                        i.id===action.payload.id? {...i, quantity:action.payload.quantity}:i
                      ))
                }

            default:
                return state
            
       }
    } 
    
    const initialState={
        items:[
            {
                id:1,
                name:'Laptop',
                price:480000,
                quantity:1
            }
        ],
        cartitems:[],
        discount:0, 
        currency:null,
        address:null,
        // itemCount:0, 
        // totalP:0 
    }

const CardProvider=({children})=>{

  
    const [state,dispatch]=useReducer(cardReducer,initialState)

    function add(item){
        dispatch({type:'ADD',payload:item})
    }

    function addtocart(item){
        dispatch({type:'ADDTOCART',payload:item})
    }

    function removecart(id){
        dispatch({type:'REMOVECART',payload:{id}})
    }
    
    function removeitem(id){
        dispatch({type:'REMOVEITEM',payload:{id}})
    }
    function clear(){
        dispatch({type:'CLEAR'})
    }

    function changeQuantity(id,quantity){
        dispatch({type:'CHANGEQUANTITY',payload:{id,quantity}})
    }
     
    

    const totalPrice=()=>{
          return state.cartitems.reduce((total,item)=>(
               total + item.price*item.quantity 
          ),0)
    }
    
    const totalQuantity=()=>{
        return state.cartitems.reduce((total,item)=>(
             total + item.quantity
        ),0)
    }
     
    return (
        <CardStateContext.Provider value={{items:state.items,cartitems:state.cartitems,totalPrice,totalQuantity,addtocart}}>
            <CardDispatchContext.Provider value={{add,removecart,clear,changeQuantity,removeitem}}>
              {children}
            </CardDispatchContext.Provider>
        </CardStateContext.Provider>
    )
}

const useCart=()=>{
    const state= useContext(CardStateContext)
    const dispatch= useContext(CardDispatchContext)

    return {...state,...dispatch}

}

export {CardProvider,useCart}