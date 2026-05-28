import React from 'react'

const Main = () => {

    const info=[
        {
            id:23, 
            title:'Total Users', 
            number:'4,821'
        },
        {
            id:24, 
            title:'Revenue', 
            number:'$12.4k'
        },
        {
            id:25, 
            title:'Sessions', 
            number:'9,302'
        }
    ]
    const activity=[
        {
            id:1, 
            task:'User signed up', 
            duration:'2 min ago', 
        },
        {
            id:2,
            task:'Report explained', 
            duration:'14 min ago'
        },
        {
            id:3, 
            task:'Settings updated',
            duration:'1 hr ago'
        }
    ]
  return (
    <div className='flex-1 pt-4'>
       <h1 className='text-2xl font-semibold'>Dashboard</h1>

           
      <ul className='flex flex-wrap gap-5  my-6'>
        {
            info.map((i)=>(
                <li key={i.id} className='flex flex-1 flex-col bg-gray-600 p-2'>
                   <span>{i.title} </span>
                   <span>{i.number} </span>
                </li>
            ))
        }
      </ul>


          <ul className='flex flex-col text-md bg-gray-900 p-3'>
            <h1 className='py-3 text-3xl font-semibold'>Recent Activity</h1>
            {
                activity.map((a)=>(
                    <li key={a.id} className='flex flex-wrap justify-between'>
                        <span>{a.task} </span>
                        <span>{a.duration} </span>
                    </li>
                ))
            }
          </ul>
    </div>
  )
}

export default Main
