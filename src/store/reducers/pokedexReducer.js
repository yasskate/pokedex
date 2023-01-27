// TODO:
// - Move types to a new file 
export const pokedexReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POKEMONS_TO_POKEDEX':
      return { ...state, pokedex: [...action.payload], pokedexMainSource: [...action.payload]}
    case 'SET_POKEMON_DETAIL':
      return { ...state, pokemon: action.payload }
    case 'CLEAR_POKEMON_DETAIL':
      return { ...state, pokemon: null }
    case 'UPDATE_QUERY_SEARCH':
      return { ...state, querySearch: action.payload }
    case 'SET_FILTERED_POKEMONS':
      return { ...state, pokedex: [...action.payload] }
    case 'RESET_FILTERED_POKEMONS':
      return { ...state, pokedex: state.pokedexMainSource }
  }
}
