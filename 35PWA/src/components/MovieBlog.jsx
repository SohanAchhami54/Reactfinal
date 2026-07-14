import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Axios } from '../api/axios'

const MovieBlog = () => { 
    const {data,isLoading,isError}=useQuery({
       queryKey:['movie'],
       queryFn:async()=>{
          const response=await Axios.get(`/search/movie?query=dune&api_key=${import.meta.env.VITE_TMDB_API_KEY}`) 
          return response.data.results
       }
    })
    console.log('the value of data is:',data)
  return (
    <div>
       <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl">
  {
    isLoading ? (
      <p className="text-blue-600 text-md">
        Data is being fetched...
      </p>
    ) : (
      data?.map((movie) => (
        <li key={movie.id} className="flex flex-col bg-gray-700 rounded-md p-3 gap-3">
          <h1>Title: {movie.title}</h1>
          <h2>Original title: {movie.original_title}</h2>

          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="object-contain"
            />
          ) : (
            <div className="h-70 bg-gray-900 rounded-md">
              <span>Image not found</span>
            </div>
          )}

          <span>Popularity: {movie.popularity}</span>
          <span>Release date: {movie.release_date}</span>
        </li>
      ))
    )
  }
</ul>
{isError && !data && <p>You're offline and no cached data is available.</p>}
    </div>
  )
}

export default MovieBlog
