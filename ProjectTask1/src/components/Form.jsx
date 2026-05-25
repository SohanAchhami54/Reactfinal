import React from 'react'
import {nanoid} from 'nanoid'
const Form = ({name,setName,phone,setPhone,data,setData}) => {
      const handleSubmit=(e)=>{
        e.preventDefault()
        if(!name && !phone) return 
        setData([...data,{id:nanoid(),name,phone}])
        setName('') 
        setPhone('')
      }
  return (
  <form onSubmit={handleSubmit}
       style={{display:'flex',alignItems:'center' ,flexDirection:'row',gap:'10px', padding:'10px',border:'1px solid gray'}}> 
        <label htmlFor="name">Name:</label>
        <input type="text"
         placeholder='Enter your name'
         value={name} 
         onChange={(e)=>setName(e.target.value)} 
         style={{outline:'none'}}/>

        <label htmlFor="phone">Phone:</label>
        <input type="number"
         placeholder='Enter your phone'
         value={phone} 
         onChange={(e)=>setPhone(e.target.value)}
         style={{outline:'none'}} />

          <button  
           style={{paddingLeft:'7px',paddingRight:'7px',backgroundColor:'blue', borderRadius:'10px',color:'white'}}
           >Add</button>
      </form>
  )
}

export default Form
