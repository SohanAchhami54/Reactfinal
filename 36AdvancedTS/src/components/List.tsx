import type React from "react";

type ListProps<T>={
     items:T[] 
     getKey:(item:T)=>React.Key 
     renderitems:(item:T)=>React.ReactNode 
}

function List<T>({items,renderitems,getKey}:ListProps<T>){
     return (
        <ul className="grid text-sm gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
              items.map((i)=>(
                <li key={getKey(i)} className="bg-gray-900 p-2 rounded-md">
                     {renderitems(i)}
                </li>
              )) 
            }
        </ul>
)}
export {List}
