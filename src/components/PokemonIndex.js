import React, { useState, useEffect } from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

URL = 'http://localhost:3000/pokemon'

const pokemonPage = () => {

  const [ pokemons, setPokemons ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState("")

  // state = {
  //   pokemons: [],
  //   searchTerm: ""
  // }

  // componentDidMount(){
  //   this.fetchPokemons()
  // }

  useEffect(() => {
    fetchPokemons()
  }, [])

  const fetchPokemons = () => {
    fetch(URL)
    .then(r => r.json())
    .then(data => setPokemons(data))
  }

  const addPokemon = ({ name, hp, number}) => {
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


    let body = {
      name: name.toLowerCase(),
      stats: [{},{},{},{},{},{value: hp, name: "hp"}],
      sprites: {
        front: imgUrl+number+".png",
        back: imgUrl+`back/${number}.png`
      }
    }

    debugger
    let configObj = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }

    fetch(URL, configObj)
    .then(r => r.json())
    .then(data => setPokemons([...this.state.pokemons, data]))
  }

  const handleSearch = (e,{value}) => {
    setSearchTerm(value)
  }

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <PokemonForm addPokemon={addPokemon} />
        <br />
        <Search onSearchChange={_.debounce(handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={pokemons.filter(p => p.name.includes(searchTerm))}/>
        <br />
      </div>
    )
}

export default pokemonPage
