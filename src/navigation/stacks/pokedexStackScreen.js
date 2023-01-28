import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View } from 'react-native'
import Pokedex from '../../screens/pokedex'
import PokemonDetail from '../../screens/pokemonDetail'
import { colors } from '../../utils/colors'
import { capitalizeWord } from '../../utils/utils'

// TODO:
// - Set pokemon name as header when detail view is shown
// https://reactnavigation.org/docs/headers/#updating-options-with-setoptions

const Stack = createNativeStackNavigator()

const PokedexStackScreen = () => (
  <Stack.Navigator
    initialRouteName='Pokedex'
    screenOptions={{
      headerTintColor: colors.hardYellow,
      headerStyle: {
        fontSize: 32
      }
    }}
  >
    <Stack.Screen
      name='PokedexList'
      component={Pokedex}
      options={{
        title: 'Pokedex',
        headerStyle: {
          backgroundColor: colors.hardBlue,
        }
      }}
    />
    <Stack.Screen
      name="PokemonDetail"
      component={PokemonDetail}
      options={({ route }) => ({
        title: `${capitalizeWord(route.params.pokemonName ?? 'Pokedex')} #${route.params.pokemonId}`,
        headerTintColor: colors.hardBlue,
        headerStyle: {
          backgroundColor: colors.yellow,
        }})
      }
    />
  </Stack.Navigator>
)

export default PokedexStackScreen
