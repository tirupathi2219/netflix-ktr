import { useEffect, useState } from 'react'
import {API_options} from '../utils/constants'
import { useDispatch } from 'react-redux';

const usePrimaryContainer = (movies) => {
const [trailers, setTrailers] = useState([])
  // const dispatch = useDispatch();
    const movieId = movies?.length ? movies[0]?.id : null
    useEffect(() => {
      if(movieId) {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_options)
        .then(response => response.json())
        .then(response =>setTrailers(response.results))
        .catch(err => console.error(err));
      }

    },[movieId])
  return {
trailers
  }
}

export default usePrimaryContainer