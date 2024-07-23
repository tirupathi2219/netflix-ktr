import React from 'react'
import usePrimaryContainer from '../hooks/usePrimaryContainer'

const PrimaryContanier = () => {
    const {movies} = usePrimaryContainer()
    console.log('6:::::', movies)
  return (
    <div>PrimaryContanier</div>
  )
}

export default PrimaryContanier