import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Pokedex from '../../screens/pokedex'
import PokemonDetail from '../../screens/pokemonDetail'

// TODO:
// - Set pokemon name as header when detail view is shown
// https://reactnavigation.org/docs/headers/#updating-options-with-setoptions

const Stack = createNativeStackNavigator()

const PokedexStackScreen = () => (
  <Stack.Navigator initialRouteName='Pokedex'>
    <Stack.Screen
      name='PokedexList'
      component={Pokedex}
      options={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#0A285F'
        },
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    />
    <Stack.Screen
      name="PokemonDetail"
      component={PokemonDetail}
    />
  </Stack.Navigator>
)

export default PokedexStackScreen
