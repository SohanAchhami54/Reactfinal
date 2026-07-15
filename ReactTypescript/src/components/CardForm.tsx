import { useState } from "react"


interface FormProps{
    onSubmit(person:{name:string,address:string}):void
}

const CardForm = ({onSubmit}:FormProps) => { 
    const [name,setName]=useState<string>('') 
    const [address,setAddress]=useState<string>('') 

    const handleSubmit=(e:React.SubmitEvent<HTMLFormElement>)=>{
         e.preventDefault() 
         onSubmit({name,address})
    }  

    return (
    <div>
       <form onSubmit={handleSubmit}
        className="flex flex-col bg-gray-900 p-3 gap-2 rounded-md">
           
           <label htmlFor="name">Name:</label>
            <input type="text" id="name" 
            placeholder="Enter your name" 
            value={name} 
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}
            className="border px-1 py-1 outline-none rounded-md focus:ring-2"
            />

             <label htmlFor="address">Address:</label>
            <input type="text" id="address" 
            placeholder="Enter your address" 
            value={address} 
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setAddress(e.target.value)}
            className="border px-1 py-1 outline-none rounded-md focus:ring-2"
            />

            <button className="bg-gray-700 rounded-md py-1 ">Submit</button>
       </form>   
    </div>
  )
}

export default CardForm
