import React from 'react'
import PrimaryContanier from './PrimaryContanier';
import SecondaryContainer from './SecondaryContainer';
import useGetMovies from '../hooks/useGetMovies';
import Header from './Header';
import SearchContainer from './gptsearch/SearchContainer';
import { useSelector } from 'react-redux';

const Browser = () => {
  useGetMovies();
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch)
  return (
   <div>
    <Header />
   <PrimaryContanier />
   <SecondaryContainer />
   {
   showGptSearch && <SearchContainer />
   }
   </div>
  )
}

export default Browser