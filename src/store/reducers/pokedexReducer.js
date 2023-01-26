export const pokedexReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_BY_ONE':
      return { ...state, counter: state.counter + 1}
  }
}

