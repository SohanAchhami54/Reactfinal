import React, { useEffect, useState } from 'react'
import {nanoid} from 'nanoid'
import Contact from './components/Contact'
import Form from './components/Form'

const App = () => {
  const [name,setName]=useState('') 
  const [phone,setPhone]=useState('')
  const [data,setData]=useState([
    {
      id:nanoid(),
      name:'Sohan',
      phone:'9749544214'
    }
  ]) 
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'100vh',backgroundColor:'gray'}}>
      <h1>My name is Sohan Achhami.</h1>
      <Form name={name} setName={setName} phone={phone} setPhone={setPhone} data={data}  setData={setData}  />
      <Contact data={data} setData={setData} />
    </div>
  )
}
export default App
