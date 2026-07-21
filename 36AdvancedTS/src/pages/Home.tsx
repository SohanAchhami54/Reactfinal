import { useReducer } from "react"

  type State={
    count:number 
  }
   
  type Action= {type:'increment'} | {type:'decrement'} // union type.
  
  function reducer(state:State,action:Action):State{
     switch(action.type){
        case 'increment':
          return {count:state.count+1}

        case 'decrement': 
         return {count:state.count-1} 
         
         default: 
          return state
     }  
  }


const Home = () => {  
  const [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <div>
      <h1>Home page</h1>
         <h1>Count: {state.count}</h1>
           <button onClick={()=>dispatch({type:'increment'})}>
             Increment
           </button>
           <button onClick={()=>dispatch({type:'decrement'})}>
            Decrement
           </button>
    </div>
  )
}

export default Home
