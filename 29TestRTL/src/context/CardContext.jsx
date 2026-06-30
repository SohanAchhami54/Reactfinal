import { createContext, useContext, useState } from "react";

const CardContext=createContext({}) 

const CardProvider=({children})=>{
    const [card,setCard]=useState([
        {
            id:1,
            name:'Prabhat K.C.',
            phone:'9808343354',
            location:'Bhanjang'
        }
    ])
    return (
        <CardContext.Provider value={{card,setCard}} >
            {children}
        </CardContext.Provider>
    )
}

const useCard=()=>{
    return useContext(CardContext) 
 
}

export  {CardProvider,useCard}