import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from '../components/tabBar'
import PokedexStackScreen from './stacks/pokedexStackScreen'
import HomeStackScreen from './stacks/homeStackScreen'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => (<TabBar {...props} />)}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{ title: 'Home' }}
        />
      <Tab.Screen
        name="PokedexStack"
        component={PokedexStackScreen}
        options={{ title: 'Pokedex' }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
