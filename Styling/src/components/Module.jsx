import React from 'react'
import buttonstyles from './Button.module.css' 
import uistyles from './Ui.module.css'
import listyles from './Li.module.css'
import mainstyles from './Main.module.css'
const Module = () => { 
    const users=[
        {
            id:1, 
            name:'Sohan',
            address:'New Baneshwor'
        }, 
        {
            id:2, 
            name:'Prabhat',
            address:'Bhanjang'
        },{
            id:3, 
            name:'Pranaya', 
            address:'Kathmandu,Bhanjang'
        }
    ]
  return (
    <div className={mainstyles.main}>
      <h1>This is module</h1> 
      
      <ul className={uistyles.ui}>
        {
             users.map((user)=>(
                <li key={user.id} className={listyles.li}>
                   <h1>Name:{user.name} </h1> 
                     <h2>Address:{user.address} </h2>
                     <button className={buttonstyles.button}>
                         Click me
                   </button> 
                </li>
             ))
        }
      </ul>
    </div>
  )
}

export default Module
