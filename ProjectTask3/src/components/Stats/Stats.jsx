import React from 'react'
import { useTask } from '../../context/TaskContext'

const Stats = () => {
    const {task}=useTask()

    const totalTask=task.length 
    const completedTask=task.filter(t=>t.completed).length
    const pendingTask=task.filter(t=>!t.completed).length 
    const completedPercentage=(completedTask/totalTask)*100

  return (
    <div className=' p-4 flex flex-col gap-2 '>
     <h1 className='text-xlfont-semibold'>This is Task Stats</h1>
     <p>  The Total Task is: {totalTask}</p>
     <p> Completed Task is: {completedTask} </p>
     <p> Pending Task is: { pendingTask} </p>
     <p> Completed Percentage:{completedPercentage.toFixed(4)}% </p>
    </div>
  )
}

export default Stats
