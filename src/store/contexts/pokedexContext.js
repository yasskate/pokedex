import { createContext } from 'react'

export const initalState = {
  pokedexMainSource: null,
  pokedex: null,
  pokemon: null,
  querySearch: ''
}

export const PokedexContext = createContext(initalState)
