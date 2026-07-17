import TodoList from "./components/TodoList"
import UserList from "./components/UserList"

const App = () => {
  return (
    <div className="text-xl p-3 min-h-screen bg-gray-700 text-white"> 
       <TodoList/>   
       <UserList/>
    </div>
  )
}

export default App
