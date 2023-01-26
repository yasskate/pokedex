import { createContext } from 'react'

export const initalState = {
  counter: 0,
  pokedex: []
}

export const PokedexContext = createContext(initalState)
