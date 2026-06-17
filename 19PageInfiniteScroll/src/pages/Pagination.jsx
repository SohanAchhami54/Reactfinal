import React from 'react'
import { useEffect, useState } from 'react'
import { Axios } from '../api/axios'
import Button from '@mui/material/Button'
import { useSearchParams } from "react-router-dom"

const Pagination = () => {
    const [movies,setMovie]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    const [searchParams, setSearchParams] = useSearchParams();
    const page=Number((searchParams.get('page')||1))

    

    const findPage=async()=>{
    try{
         setLoading(true) 
         setError(null)

         const response=await Axios.get(`/search/movie?query=marvel&page=${page}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`) 
         console.log('result is:',response.data)
         console.log('the final data is:',response.data.results)
         setMovie(response.data.results)

        }catch(error){
         console.log('Error fetching movie:',error)
         setError(error.message) 
         setMovie([])

       }finally{
        setLoading(false)
    }
    }
    useEffect(()=>{
       findPage()
    },[page])
    
    if(loading) return <p className='text-red-700 text-4xl'>Loading....</p>
    if(error) return <p className='text-red-500 text-3xl'>{error} </p>
  return (
    <div>
          <div className='flex justify-between px-1 py-3'>
                <h1>This is pagination.</h1>
                <div className='flex gap-3'>
                      <Button disabled={page===1} onClick={()=>setSearchParams({page:page-1})}
                       variant="outlined">Prev</Button>
                      <Button onClick={()=>setSearchParams({page:page+1})}
                       variant="outlined">Next</Button>
                </div>
          </div>
    
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {movies?.slice(0,9).map((movie) => (
              <li
                key={movie.id}
                className="flex flex-col gap-2 bg-gray-700 p-2 rounded-md group hover:bg-gray-600 transition-all duration-300 ease-linear"
              >
                <div className="p-2 flex flex-col gap-3">
                  <div className="overflow-hidden rounded-md">
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-64 object-cover rounded-md transition-all duration-200 group-hover:scale-110"
                      />
                    ) : (
                      <p className="flex justify-center items-center rounded-md h-64 bg-gray-900">
                        No Image
                      </p>
                    )}
                  </div>

                  <h1 className="font-semibold">{movie.title}</h1>
                </div>

                <div className="flex flex-col gap-2 px-2 pb-2 text-sm">
                  <p>Rating: {(movie.vote_average || 0).toFixed(1)}</p>
                  <p>Vote Count: {movie.vote_count}</p>
                  <p>Release Date: {movie.release_date || "N/A"}</p>
                </div>
              </li>
            ))}
          </ul>
    </div>
  )
}

export default Pagination
