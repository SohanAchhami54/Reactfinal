import React from 'react'

const Tasklist = ({task,edit,deletion,toggle}) => {
  return (
    <div className='flex justify-center items-center mt-5 max-w-5xl mx-auto'>
       <ul className='flex flex-col gap-2'>
        {
            task?.map((t)=>(
                <li key={t.id} className='flex flex-wrap items-center gap-5 bg-gray-500 p-3 rounded-md'>
                    <input type="checkbox"
                    id='completed' 
                    value={t.done} 
                    onClick={()=>toggle(t.id)}
                    />
                   <span className={`${t.done===true?'line-through':''}`}>Task :{t.task} </span>
                   <span>Priority :{t.priority} </span>
                   <span>Duedate :{t.duedate} </span>
                   <span>{t.updateAt &&<p>UpdatedAt :{ t.updateAt} </p>} </span>
                   <button disabled={t.done} onClick={()=>edit(t)}
                    className='px-2 py-1 bg-blue-600 rounded-md'>Edit</button>
                   <button onClick={()=>deletion(t.id)}
                    className='px-2 py-1 bg-red-600 rounded-md'>Delete</button>
                </li>
            ))
        }
       </ul>
    </div>
  )
}

export default Tasklist
