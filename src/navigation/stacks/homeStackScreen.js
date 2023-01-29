import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/home'
import Information from '../../screens/information'
import { colors } from '../../utils/colors'

const Stack = createNativeStackNavigator()

const HomeStackScreen = () => (
  <Stack.Navigator
    initialRouteName='Pokedex'
    screenOptions={{
      headerTintColor: colors.hardYellow
    }}
  >
    <Stack.Screen
      name='Home'
      component={Home}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: colors.hardBlue
        }
      }}
    />

      <Stack.Screen
        name='Information'
        component={Information}
        options={{
          title: 'Information',
          headerStyle: {
            backgroundColor: colors.hardBlue
          }
        }}
      />
  </Stack.Navigator>
)

export default HomeStackScreen
