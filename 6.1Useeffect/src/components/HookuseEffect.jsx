  import React, { useEffect, useState } from 'react'

  const HookuseEDA = () => {  
    const [userdata,setUserdata]=useState([])  

      
    useEffect(()=>{
        const fetchUser=async()=>{
          const response=await fetch(`https://randomuser.me/api`) 
          const data=await response.json() 
          setUserdata(data.results[0])
          console.log('My github data is:',data.results)
        }  
        fetchUser()
    },[name])
    return (
      <>
        <div className='bg-gray-500 text-white text-xl min-h-screen flex flex-col items-center justify-center gap-2'>
          <h1>UseEffect to fetch data on component mount and fetch random user data on load also.</h1>
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

  export default HookuseEDA
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 // import React, { useEffect, useState } from 'react'

  // const HookuseEffect = () => {  
  //   const [userdata,setUserdata]=useState([])  
      
  //   useEffect(()=>{
  //       const fetchUser=async()=>{
  //         const response=await fetch(`https://api.github.com/users/SohanAchhami54`) 
  //         const data=await response.json() 
  //         setUserdata(data)
  //         console.log('My github data is:',data)
  //       }  
  //       fetchUser()
  //   },[])
  //   return (
  //     <div className='text-3xl bg-gray-400 text-white min-h-screen flex flex-col flex-wrap gap-3 items-center justify-center'>
  //       <span>Image of {userdata.name} </span>
  //       <div className='overflow-hidden rounded-xl'>
  //           <img src={userdata.avatar_url} alt={userdata.name} className='w-80 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 ease-linear'/> 
  //       </div>
  //       <span>Followers:{userdata.followers}  Following:{userdata.following} </span>
  //       <p>Github created at: {userdata.created_at?.split('T')[0]}</p> 
  //       <p>Github Updated at: {userdata.updated_at?.split('T')[0]} </p>
  //       <p>Repos Url:{userdata.repos_url} </p> 
  //     </div>
  //   )
  // }

  // export default HookuseEffect
