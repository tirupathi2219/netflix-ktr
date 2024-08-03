import React from 'react'
import useSecondaryContainer from '../hooks/useSecondaryContainer'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies)
  return (
    <div className='bg-slate-900 text-white'>
      <h3>Now playing</h3>
    <div  className='flex gap-x-1'>
      {
        movies.map((movie) => {
          return (
            <div className=''>
              <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
              </div>
          )
        })
      }
    </div>
    <h3>Trending</h3>
    <div  className='flex gap-x-1'>

      {
        movies.map((movie) => {
          return (
            <div className=''>
              <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
              </div>
          )
        })
      }
    </div>
    <h3>Horror</h3>
    <div  className='flex gap-x-1'>
      {
        movies.map((movie) => {
          return (
            <div className=''>
              <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
              </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default SecondaryContainer