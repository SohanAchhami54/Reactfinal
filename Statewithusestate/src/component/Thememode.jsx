import React, { useEffect } from 'react'

const Thememode = ({isdark,setIsdark}) => {
    useEffect(()=>{
       if(isdark){
         document.querySelector('html').classList.remove('light')
         document.querySelector('html').classList.add('dark')
       }else{
        document.querySelector('html').classList.remove('dark') 
        document.querySelector('html').classList.add('light') 
       }
    },[isdark])
  return (
    <div className={`flex flex-col ${isdark?'text-white bg-black':'text-black bg-white'}`}>
      <h1 className=' text-xl'>This is thememode. </h1>
      <button onClick={()=> setIsdark(prev=>prev===0?1:0)}
        className='p-1 bg-blue-500 rounded-lg'>{isdark?'Light Mode':'Dark Mode'} </button>
    </div>
  )
}

export default Thememode
