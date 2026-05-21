import React, { useState } from 'react'
import Event from './components/Event'

const App = () => {
    const [username1,setUsername1]=useState('')  
    const [password1,setPassword1]=useState('') 

    const [username2,setUsername2]=useState('')  
    const [password2,setPassword2]=useState('') 

    const [recentUser,setRecentUser]=useState('')
    return (
    <div className='min-h-screen flex items-center bg-neutral-300'>
      <div className='max-w-4xl mx-auto flex flex-col gap-10  p-4 rounded-lg'>
        
        {/* This is event one  */}
        <Event  
        task='Practice Synthetic Event'
         username={username1} 
         setUsername={setUsername1} 
         password={password1}
         setPassword={setPassword1}   
          recent={false}   
        />
   
          <Event  
          task='Input form with alert on submit and update state'
          username={username2} 
          setUsername={setUsername2} 
         password={password2}
         setPassword={setPassword2}  
         recentUser={recentUser} 
         setRecentUser={setRecentUser}
         recent={true}
           
        />
      </div>
      
    </div>
  )
}

export default App
