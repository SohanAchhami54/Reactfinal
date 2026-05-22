import React from 'react'
//example of conditional rendering 
function Item({name,isPacked}){
   
   return (
    //conditional rendering with logical and operator 
    <li>
        {name} {isPacked && '✅'}
    </li>




    // if u want to add the html syntax
    //   <li>  
    //     {
    //         isPacked ? (
    //             <del> 
    //             {name+'✅'}
    //             </del>
    //         ):(
    //             name
    //         )}
    // </li>
   )
    // return <li>{isPacked?name+'✅':name} </li>  //this is simple conditional rendering 
      //  return <li>{name}✅   </li> 
      // return null 
   }


const ConditionalRender = () => {
  return (
    <div className=''>
      <h1 className='text-xs sm:text-md md:text-2xl lg:text-4xl font-semibold text-center p-2'>This is Conditional Rendering.</h1>
       <ul className='flex flex-wrap justify-around text-xl  font-medium'>
         <Item name="Dell Laptop" isPacked={true} />
         <Item name="Washing Machine" isPacked={true} />
         <Item name="Gaming Computer" isPacked={true} />
         <Item name="Gaming Laptop" isPacked={false} />
       </ul>
    </div>
  )
}

export default ConditionalRender
