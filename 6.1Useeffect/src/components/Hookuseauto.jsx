  import React, { useEffect, useState } from 'react'

  const Hookuseauto = () => {  
    const [userdata,setUserdata]=useState([])  
    const [count,setCount]=useState(0)
      
    useEffect(()=>{
        const fetchUser=async()=>{
          const response=await fetch(`https://randomuser.me/api`) 
          const data=await response.json() 
          setUserdata(data.results[0])
          console.log('My github data is:',data.results)
        }  
        fetchUser()
    },[count])

    useEffect(()=>{
        setInterval(()=>{
            setCount(prev=>prev+1)
        },2000)
    },[])
    return (
      <>
        <div className=' text-white text-xl flex flex-col items-center justify-center gap-2'>
          <h1 className='text-2xl font-semibold'>UseEffect with dependency array for auto refresh </h1>
    
          <div className='overflow-hidden'>
                <img src={userdata?.picture?.large} alt={userdata?.name?.first} className='w-80 hover:scale-105 transition-all duration-200 ease-linear delay-100' />
          </div>
        
          <p>Name: {userdata?.name?.title}{userdata?.name?.first}{userdata?.name?.last} </p>
          <h1>Gender: {userdata?.gender} </h1>
           <p>Date of Birth: {userdata?.dob?.date.split('T')[0]} </p>
           <p>Email: {userdata?.email} </p> 
           <p>Location: {userdata?.location?.city} </p> 
           <p>Country: {userdata?.location?.country} </p>
           <p>Phone: {userdata?.phone} </p>
           <p>Age: {userdata?.registered?.age} </p>
        </div>
      </>
    )
  }

  export default Hookuseauto
