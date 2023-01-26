export const pokedexReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POKEMONS_TO_POKEDEX':
      return { ...state, pokedex: [...action.payload]}
    case 'SET_POKEMON_DETAIL':
      return { ...state, pokemon: action.payload }
    case 'CLEAR_POKEMON_DETAIL':
      return { ...state, pokemon: null }
  }
}

