import React, { useEffect, useState } from 'react'
import instance from '../baseUrl'
import './Row.css'
function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([])
  const base_url = "https://image.tmdb.org/t/p/original/"
  async function fetchData() {
    const result = await instance.get(fetchUrl)
    setMovies(result.data.results)
  }
  useEffect(() => {
    fetchData()
  })
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='movies'>
        {
          movies.map((movie) => (
            <img className={`movie ${isLarge && 'largeMovies'}`} src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name ? movie.name : movie.title} />
          ))
        }
      </div>
    </div>

  )
}

export default Row