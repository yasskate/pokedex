import { createContext } from 'react'

export const initalState = {
  pokedex: null,
  pokemon: null
}

export const PokedexContext = createContext(initalState)
