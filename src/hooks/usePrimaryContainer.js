import React, { useEffect, useState } from 'react'
import {API_options} from '../utils/constants'

const usePrimaryContainer = () => {
    const [moviesList, setMovieslist] = useState();
    useEffect(() => {
          fetch('https://api.themoviedb.org/3/discover/movie', API_options)
            .then(response => response.json())
            .then(response => console.log("api response", response))
            .catch(err => console.error(err));

    },[])
  return {
    movies: []
  }
}

export default usePrimaryContainer