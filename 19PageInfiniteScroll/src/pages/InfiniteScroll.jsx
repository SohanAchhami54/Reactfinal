import React, { useEffect, useState } from 'react'
import { Axios } from '../api/axios'

const InfiniteScroll = () => {
    const [data,setData]=useState([]) 
    const [page,setPage]=useState(1)
    const [loading,setLoading]=useState(false)
    const [movie,setMovie]=useState('')

    const fetchMovieData=async(moviename,pagenumber)=>{
        
        setLoading(true)
        const result= await Axios.get(`/search/movie?query=${moviename}&page=${pagenumber}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    
        setData((prev)=>[...prev,...result.data.results])
        setLoading(false)
    }
    
 useEffect(()=>{
       const movieQueries=['inception','interstellar','the dark knight','the matrix','avatar','titanic','dune','deadpool','logan','arrival','gravity','tenet','skyfall','mad max','fight club','john wick']
 
        let index =Math.floor(Math.random()*movieQueries.length) 
        setMovie(movieQueries[index])
        
 },[page])

    useEffect(()=>{
        if(movie){
          fetchMovieData(movie,page)
        }
    },[movie,page])

    useEffect(()=>{
        const handleScroll=()=>{
           const scrollposition=window.scrollY
           const viewport=window.innerHeight 
           const heightofweb=document.documentElement.scrollHeight //this is root html element

           if(scrollposition+viewport>=heightofweb-1){
              setPage(prev=>prev+1)
           }
        }

        window.addEventListener('scroll',handleScroll)  //listen the event 
        return ()=>window.removeEventListener('scroll',handleScroll) //remove the event once finished.
    },[])



    console.log('the value of data is:',data)

  return (
    <div>
      <h1 className='text-xl py-1 font-medium'> This is infinitescroll Movie Blog</h1>
       <div className='max-w-6xl mx-auto'>
       <ul className='grid grid-cols-4 gap-6'>
         {
            data?.map((d)=>(
                <li key={d.id} className='flex flex-col gap-2 bg-gray-700 p-2 rounded-md group hover:bg-gray-600 transition-all duration-200 ease-linear delay-150'>
                       <div className='p-2 flex flex-col gap-3'>
                          <div className='overflow-hidden rounded-md'>
                            {
                                d.backdrop_path
                                ?
                                <img src={`https://image.tmdb.org/t/p/w500/${d.backdrop_path}`} alt={d.original_title}
                                className='w-full h-56 object-cover rounded-md transition-all duration-200 ease-linear delay-100  group-hover:scale-110'/>
                          :
                           <p className='flex justify-center items-center rounded-md h-56 bg-gray-900'>No image</p>
                            }
    
                           
                          </div>
                          
                         <h1>Original Title:{d.original_title}</h1>
                         <h2>Title: {d.title}</h2>
                       </div>

                        <div className='flex flex-col gap-2 p-2'>
                            {/* <p>Overview: {d.overview} </p> */}
                            <p className='text-sm'>Vote count: {d.vote_count} </p>
                            <p className='text-sm'>Release Data :{d.release_date} </p>
                           </div>
                     
                      
                </li>
            ))
         }
       </ul>
       </div>
    </div>
  )
}

export default InfiniteScroll

