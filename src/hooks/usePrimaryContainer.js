import { useEffect } from 'react'
import {API_options} from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { getNowPlayingMovies } from '../redux/slice/movieList';

const usePrimaryContainer = () => {
  const movies = useSelector((state) => state.movies )
    const dispatch = useDispatch();
    useEffect(() => {
          fetch('https://api.themoviedb.org/3/discover/movie', API_options)
            .then(response => response.json())
            .then(response => dispatch(getNowPlayingMovies(response.results)))
            .catch(err => console.error(err));

    },[])
  return {
    movies: movies
  }
}

export default usePrimaryContainer