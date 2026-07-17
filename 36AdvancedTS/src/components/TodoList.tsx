import { useFetch } from "../hooks/useFetch"
import { List } from "./List"

interface Todo{
    id:number 
    title:string 
    completed:boolean
}

const TodoList = () => { 
    const {loading,data,error}=useFetch<Todo[]>('https://jsonplaceholder.typicode.com/todos') 
    if(loading) return <p className="text-xl text-red-600">Data is loading...</p>
    if(error) return <p className="text-red-700 text-xl">{error} </p>
  return (
    <div>
       <List
        items={data||[]}  
        getKey={todo=>todo.id}
        renderitems={(todo)=>(
            <div className="flex flex-col gap-1">
                <span>Id: {todo.id} </span>
                <span>Title: {todo.title} </span>
            </div>
        )} 
       />
    </div>
  )
}

export default TodoList
