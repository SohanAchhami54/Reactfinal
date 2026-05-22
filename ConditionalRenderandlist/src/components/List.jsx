import React from 'react'

const List = () => { 
    const items=[
        {
            id:1, 
            name:'Dell laptop', 
            price:100000, 
            image:'https://i.pinimg.com/1200x/fe/f7/b3/fef7b3cbaeb59afc974ab04dd20741e6.jpg'
        },
        {
            id:2, 
            name:'Msi Laptop', 
            price:110000, 
            image:'https://i.pinimg.com/1200x/ec/fe/f6/ecfef648fcad091b2ca0bb83f3b9e0bb.jpg'
        },
        {
            id:3, 
            name:'lenovo laptop', 
            price:120000, 
            image:'https://i.pinimg.com/1200x/28/d5/1b/28d51b1f10c3657d400fbf6cc06c79df.jpg'
        }, 
        {
            id:4, 
            name:'Asus laptop', 
            price:300000, 
            image:'https://i.pinimg.com/1200x/92/1d/6b/921d6b4cb0deef88628a3ccd550424ba.jpg', 
        }
    ]
  return (
    <div>
        <h1 className='my-4 text-center text-xl font-semibold '>This is the dynamic list examples</h1>
        <ul className='flex flex-wrap justify-center gap-5 '>
             
            {
                items.map((item)=>(
                    <li key={item.id} className='group flex flex-col border border-neutral-600 rounded-lg overflow-hidden bg-gradient-to-r from-blue-300 via-red-300 to-purple-300'>
                        <div className='p-3'>
                            <div className='w-70 h-70 overflow-hidden rounded-lg'>
                            <img src={item.image} alt={item.name} className='w-full h-full object-cover      hover:scale-105 transition-all duration-300 ease-in-out delay-75 rounded-lg' />
                        </div>
                        </div>
                     
                        <div className='flex flex-col gap-4 p-3'>
                            <h1>{item.name} </h1>
                         <span>{item.price} </span>
                        </div>
                        
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default List
