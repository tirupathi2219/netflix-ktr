import React from 'react'
import PrimaryContanier from './PrimaryContanier';
import SecondaryContainer from './SecondaryContainer';
import useGetMovies from '../hooks/useGetMovies';
import Header from './Header';

const Browser = () => {
  useGetMovies()
  return (
   <div>
    <Header />
   <PrimaryContanier />
   <SecondaryContainer />
   </div>
  )
}

export default Browser