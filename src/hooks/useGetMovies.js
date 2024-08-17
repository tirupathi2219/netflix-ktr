import { useEffect } from 'react'
import {API_options} from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { getNowPlayingMovies } from '../redux/slice/movieList';

const useGetMovies = () => {
  const movies = useSelector((state) => state.movieList.movies )
    const dispatch = useDispatch();
    useEffect(() => {
          fetch('https://api.themoviedb.org/3/movie/now_playing?page=1&region=IN', API_options)
            .then(response => response.json())
            .then(response =>{ 
              dispatch(getNowPlayingMovies(response.results))})
            .catch(err => console.error(err));

    },[])
  return {
    movies: movies
  }
}

export default useGetMovies;