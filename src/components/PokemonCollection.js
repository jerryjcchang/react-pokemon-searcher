import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = (props) => {

  // const [ front, setFront ] = useState(true)

  // useEffect(() => {
  //    setInterval(dance, 500)
  // },[])
  // componentDidMount(){
  //
  // }

  // const dance = () => {
  //   setInterval(() => {setFront(!front)},500)
  // }

    const { pokemons } = props

    return (
      <Card.Group itemsPerRow={6}>
        {pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)}
      </Card.Group>
    )
}

export default PokemonCollection
