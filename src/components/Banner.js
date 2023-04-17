import React, { useEffect, useState } from 'react'
import instance from '../baseUrl'
import './Banner.css'
function Banner({fetchUrl}) {
    const [movies, setMovies] = useState([])
  const base_url = "https://image.tmdb.org/t/p/original/"
  async function fetchData() {
    const result = await instance.get(fetchUrl)
    setMovies(result.data.results[
    Math.floor(Math.random()*result.data.results.length-1)])
  }
  useEffect(() => {
    fetchData()
  },[])

  function descSmaller(str,n){
    return str?.length>n ? str.substr(0,n-1)+"..........." : str
  }

  return (
    <div className='banner' style={{backgroundImage:`url(${base_url}${movies.backdrop_path})`,
backgroundSize:'cover',backgroundPosition:'center'}}>
    <div className='banner-content'>
    <h1 className={movies.title?.length>15 ? 'headtextSmall' : 'headtext'}>{movies.title}</h1>
    <p className='sectext'>{descSmaller(movies.overview,100)}</p>
    </div>
</div>
  )
}

export default Banner