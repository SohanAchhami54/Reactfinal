import React  from 'react'

const Event = ({
    task,
    username,
    setUsername, 
    password,
    setPassword, 
    recentUser,
    setRecentUser,
    recent=false

}) => {
  
    const handleClick=(e)=>{
       e.preventDefault()
       if(!username || !password) return 
       alert('Form was submit')
       setUsername('')  
       setPassword('')
       if(recent){
          setRecentUser(username)
       }
      
    }

  return (
    <div className='bg-white border border-gray-100 shadow-xl p-4 rounded-2xl'>
        <h1 className='text-xl font-bold tracking-tight mb-2'> {task} </h1>
       {/* <form onSubmit={recent?handleClick:undefined}> */} 
       <form>
        <div className=' flex flex-col gap-2 '>
        
        {/* Username  */}
        <label htmlFor="username" className='text-sm font-medium text-gray-600'>Username:</label>
        <input type="text" id='username'
        value={username} 
        onChange={(e)=>setUsername(e.target.value)}
        className='border border-gray-200 rounded-lg px-3 py-2 focus:border-blue-400 focus:ring-2 outline-none' /> 

        {/* Password  */}
        <label htmlFor="password" className='text-sm font-medium text-gray-600'>Password:</label>
        <input type="password" id='password'
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
        className='border border-gray-200 rounded-lg px-3 py-2 focus:border-blue-500 focus:ring-2  outline-none' />

        {/* button  */}
          {/* <button> */}
         <button onClick={recent?handleClick:undefined}  
       
          className='mt-1 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white text-sm font-medium py-2 transition-all duration-200  ease-linear'>Submit</button>
        
       {recent &&  recentUser &&
         
          <span>The Recent User is:{recentUser} </span>
       }
          
        </div>
       
       </form>
    </div>
  )
}

export default Event
