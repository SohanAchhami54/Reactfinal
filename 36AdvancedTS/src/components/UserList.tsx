import { useFetch } from "../hooks/useFetch"
import { List } from "./List"

interface User{
    id:number 
    name:string 
    email:string 
}

const UserList = () => {
    const {loading,data,error}=useFetch<User[]>('https://jsonplaceholder.typicode.com/users') 
      if(loading) return <p className="text-xl text-red-600">Data is loading...</p>
      if(error) return <p className="text-red-700 text-xl">{error} </p>
  return (
    <div>
        <List
         items={data||[]} 
         getKey={user=>user.id}
         renderitems={(user)=>(
            <div className="flex flex-col gap-2">
                <span>Id: {user.id}</span> 
                <span>Name: {user.name}</span>
                <span>Email: {user.email} </span>
            </div>
         )} 
        />
    </div>
  )
}

export default UserList
