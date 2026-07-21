import AccessibleModal from "./components/AccessibleModal"
import Login from "./components/Login"

const App = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-3">
      <h1>This is react.js</h1>
       <Login/>
       <AccessibleModal/>
    </div>
  )
}

export default App
