import React, { useState, useEffect } from "react"
import { Axios } from "../api/axios"

const MovieBlog=()=> {
  const [movies, setMovies] = useState([]);
  const [moviename, setMoviename] = useState("Ghost");
  const [pagenumber, setPagenumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [movieContainer, setMovieContainer] = useState(null);
  const [pagePositions, setPagePositions] = useState({});

  // Fetch Movies
  const fetchMovies = async (page, isNewSearch = false) => {
    if (!moviename) return
    setLoading(true)
    try {
       const result = await Axios.get(`/search/movie?query=${moviename}&page=${page}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`)

      const newMovies = result.data.results || []

      if (isNewSearch) {
        setMovies(newMovies);
      } else {
        setMovies(prev=> [...prev, ...newMovies])
      }
    } catch (error) {
      console.error("Error fetching movies:", error)
    }
    setLoading(false)
  }


  //to fetch new movie
  useEffect(() => {
    setPagenumber(1)
    setPagePositions({})
    fetchMovies(1, true)
  }, [moviename])

  // Fetch next pages
  useEffect(() => {
    if (pagenumber > 1) {
      fetchMovies(pagenumber, false)
    }
  }, [pagenumber])





  // Infinite Scroll
  useEffect(() => {
    const container = movieContainer
    if (!container) return

    const handleScroll = () => {
      if ( container.scrollTop + container.clientHeight >=container.scrollHeight - 10) {
          setPagePositions((prev) => ({
            ...prev,
            [pagenumber]: container.scrollTop,
          }))

          setPagenumber((prev) => prev + 1)
        }
      }

    container.addEventListener('scroll', handleScroll)

    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [movieContainer, loading, pagenumber])

  // Previous Page
  const handlePrev = () => {
    if (pagenumber > 1 && !loading) {
      const prevPage = pagenumber - 1;

      setPagenumber(prevPage);

      requestAnimationFrame(() => {
        if (movieContainer) {
          movieContainer.scrollTop = pagePositions[prevPage]
        }
      });
    }
  };

  // Next Page
  const handleNext = () => {
    if (!loading && movieContainer) {
      setPagePositions((prev) => ({
        ...prev,
        [pagenumber]: movieContainer.scrollHeight-10,
      }));

      setPagenumber((prev) => prev + 1);
    }
  };

  return (
    <div className="h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search movie..."
            value={moviename}
            onChange={(e) => setMoviename(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 rounded bg-slate-700 border border-slate-600 text-white focus:outline-none"
          />
           <div>
            {
                loading
                 &&
                <p className="text-red-600 text-2xl">Loading.... </p>
                
             }
           </div>

          <div className="flex gap-3 items-center">
            <button
              onClick={handlePrev}
              disabled={pagenumber === 1 || loading}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 rounded"
            >
              Prev
            </button>

            <span className="px-3 py-2 bg-slate-950 rounded text-amber-400">
              Page {pagenumber}
            </span>

            <button
              onClick={handleNext}
              disabled={loading}
              className="px-4 py-2 bg-amber-500 text-slate-950 hover:bg-amber-400 rounded font-bold"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Movie Container */}
      <div
        ref={setMovieContainer}
        className="flex-1 overflow-y-auto overflow-x-hidden"
      >
       <div className="max-w-7xl mx-auto p-6">
       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {
            movies?.map((movie) => (
            <li key={movie.id}
            className="flex flex-col gap-2 bg-gray-700 p-2 rounded-md group hover:bg-gray-600 transition-all duration-300 ease-linear delay-300"
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

          <h1 className="font-semibold ">
            {movie.title}
          </h1>
        </div>

        <div className="flex flex-col gap-2 px-2 pb-2 text-sm">
          <p>
             Rating: {(movie.vote_average || 0).toFixed(1)}
          </p>

          <p>
            Vote Count: {movie.vote_count}
          </p>

          <p>
            Release Date: {movie.release_date || 'N/A'}
          </p>
        </div>
      </li>
    ))}
  </ul> 
</div>
</div>
    </div>
  );
}

export default MovieBlog