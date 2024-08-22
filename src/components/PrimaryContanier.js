import React from 'react'
import usePrimaryContainer from '../hooks/usePrimaryContainer'
import { useSelector } from 'react-redux'

const PrimaryContanier = () => {
  const movies = useSelector((state) => state.movies)
    const {trailers} = usePrimaryContainer(movies)
  const teaser = trailers?.filter((item) =>  item.type === "Teaser")[0]
  console.log('::::::ovies', movies)
  return (
 <div className=''>
  {/* {
    movies?.length && movies.map((movie) => {
      console.log('movie:::', movie)
      return (
        <div>

          </div>
      )
    })
  } */}
 </div>
  )
}

export default PrimaryContanier