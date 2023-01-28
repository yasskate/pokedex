import { NavigationContainer } from '@react-navigation/native'
import { useReducer } from 'react'

import TabNavigator from './src/navigation/tabNavigator'
import { pokedexReducer } from './src/store/reducers/pokedexReducer'
import { PokedexContext, initalState } from './src/store/contexts/pokedexContext'

export default function App() {
  const [state, dispatch] = useReducer(pokedexReducer, initalState)
  return (
    <NavigationContainer>
      <PokedexContext.Provider value={[state, dispatch]}>
        <TabNavigator />
      </PokedexContext.Provider>
    </NavigationContainer>
  );
}
