import React, { useState, useEffect, useRef } from "react";
import { Axios } from "../api/axios";

const MovieBlog = () => {
  const [movies, setMovies] = useState([]);
  const [inputMovie,setInputMovie]=useState('')
  const [moviename, setMoviename] = useState("Avenger");
  const [pagenumber, setPagenumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState('')

  const movieContainer = useRef(null);   // ← Best way

  // Fetch Movies
  const fetchMovies = async (page, isNewSearch = false) => {
    if (!moviename) return;
    
    setLoading(true);
    try {
      const result = await Axios.get(
        `/search/movie?query=${moviename}&page=${page}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      );

      const newMovies = result.data.results || [];
      console.log('the movie data is:',newMovies)
      if (isNewSearch) {
        setMovies(newMovies);
      } else {
        setMovies((prev) => [...prev, ...newMovies]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError(error.message)
    }
    setLoading(false);
  };

  // Fetch when search changes
  useEffect(() => {
    setPagenumber(1);
    fetchMovies(1, true);
  }, [moviename]);

  // Fetch next page
  useEffect(() => {
    if (pagenumber > 1) {
      fetchMovies(pagenumber, false);
    }
  }, [pagenumber]);

  // Infinite Scroll
  useEffect(() => {
    const container = movieContainer.current;
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 50 &&!loading) {
        setPagenumber((prev) => prev + 1);
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, [loading,movieContainer]);  


  const handleSubmit=(e)=>{
    e.preventDefault()
     setMoviename(inputMovie)
     setInputMovie('')
  }
 if(error) return <p> Error occur: {error}</p>
  return (
    <div className="h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Header */}
      <div className=" p-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search movie"
            value={inputMovie}
            onChange={(e) => setInputMovie(e.target.value)}
            className="w-full sm:w-64 px-4 py-1 rounded bg-slate-700 border border-slate-600 text-white focus:outline-none"
          />
          </form>

          {loading && <p className="text-red-600 text-2xl">Loading....</p>}
        </div>
      </div>

      {/* Movie Container */}
      <div
        ref={movieContainer}     // ← Changed here
        className="flex-1 overflow-y-auto overflow-x-hidden"
      >
        <div className="max-w-7xl mx-auto p-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies?.map((movie) => (
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

          {loading && movies.length > 0 && (
            <div className="text-center py-6">
              <p className="text-amber-500">Loading more movies...</p>
            </div>
          )}
          { 
             movies.length===0 && (
              <div className="text-center py-6">
                <p className="text-red-600">No movie found. Try different Search</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default MovieBlog;