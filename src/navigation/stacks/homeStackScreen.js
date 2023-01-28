import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Pokedex from '../../screens/pokedex'
import Home from '../../screens/home'
import Information from '../../screens/information'
import { colors } from '../../utils/colors'

// TODO:
// - Set pokemon name as header when detail view is shown
// https://reactnavigation.org/docs/headers/#updating-options-with-setoptions

const Stack = createNativeStackNavigator()

const HomeStackScreen = () => (
  <Stack.Navigator initialRouteName='Pokedex'>
    <Stack.Screen
      name='Home'
      component={Home}
      // options={{ header: () => <></> }}
      // options={{
      //   title: 'Pokedex adsf',
      //   headerTintColor: 'white',
      //   headerStyle: {
          // backgroundColor: 'red',
          // backgroundColor: colors.hardBlue    
      //   },
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
      //     fontSize: 24
      //   }
      // }}
      />

      <Stack.Screen
        name='Information'
        component={Information}
      // options={{ header: () => <></> }}
      />
    {/* <Stack.Screen
      name="PokemonDetail"
      component={PokemonDetail}
    /> */}
  </Stack.Navigator>
)

export default HomeStackScreen
