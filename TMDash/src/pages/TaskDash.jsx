        import React, { useEffect, useState } from 'react'
        import Header from '../components/Header'
        import Task from '../components/Task'
        import TaskList from '../components/TaskList'

        const TaskDash = ({thememode,setThememode}) => {


            const [search,setSearch]=useState('')
            const [filter,setFilter]=useState('all')
            const [input,setInput]=useState({
                task:'',
                duedate:'',
                completed:false
            })  
            const [task,setTask]=useState([])



            useEffect(()=>{
                const value=JSON.parse(localStorage.getItem('tasks'))
                if(value && value.length>0){
                    setTask(value)
                }
            },[])

            useEffect(()=>{
                localStorage.setItem('tasks',JSON.stringify(task))
            },[task])
            console.log('task is:',task)
            return (
            <div className='flex flex-col gap-3'>
            <Header thememode={thememode} setThememode={setThememode} search={search} setSearch={setSearch}
            filter={filter} setFilter={setFilter}  />
            

            <Task input={input} setInput={setInput} setTask={setTask}  />

            <TaskList  task={task} setTask={setTask} filter={filter} search={search} />
            </div>
        )
        }
        export default TaskDash
