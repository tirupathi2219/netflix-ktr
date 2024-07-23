import { useEffect,/* useState */ } from 'react'
import { API_options } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { getNowPlayingMovies } from '../redux/slice/movieList';

const usePrimaryContainer = () => {
  // const [moviesList, setMovieslist] = useState();
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie', API_options)
      .then(response => response.json())
      .then(response => dispatch(getNowPlayingMovies(response.results)))
      .catch(err => console.error(err));

  }, [dispatch])
  return {
    movies: []
  }
}

export default usePrimaryContainer