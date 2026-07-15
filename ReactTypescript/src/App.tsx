import Card from "./components/Card.tsx"
import CardForm from "./components/CardForm.tsx"
import CardList from "./components/CardList.tsx"
import Counter from "./components/Counter.tsx"
import type { CardProps } from "./types.ts"

const menu:CardProps[]=[
  {id:1,name:'Lenovo',price:120000},
  {id:2,name:'Dell',price:120300},
  {id:3,name:'macbook',price:130000}
]



const App = () => {

  const handleSubmit=(person:{name:string,address:string})=>{
    console.log('name of the person is:',person)
  }

  return (
    <div className="min-h-screen bg-gray-700 text-white p-3 flex flex-col gap-3 justify-center items-center">
      <h1>This is react and typescript.</h1>
      <Card name='Sohan' address='basbari' gender='male' />
      <Card name='Sohan' address='basbari' gender='male' />

      <div>
         <Counter/>
      </div>
      <div>
         <CardList items={menu}/>
      </div>
      <div>
        <CardForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default App
