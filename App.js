import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useReducer } from 'react'

import Information from './src/screens/information'
import TabNavigator from './src/navigation/tabNavigator'
import { pokedexReducer } from './src/store/reducers/pokedexReducer'
import { PokedexContext, initalState } from './src/store/contexts/pokedexContext'

const Stack = createNativeStackNavigator()

export default function App() {
  const [state, dispatch] = useReducer(pokedexReducer, initalState)
  return (
    <PokedexContext.Provider value={[state, dispatch]}>
      <NavigationContainer>
        <Stack.Navigator  initialRouteName='Tabs'>
          <Stack.Screen
            name='Information'
            component={Information}
            />
          <Stack.Screen
            name='Tabs'
            component={TabNavigator}
            options={{
              header: () => (<></>)
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </PokedexContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
