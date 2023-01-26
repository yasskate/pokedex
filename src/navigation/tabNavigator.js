import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home'
import TabBar from '../components/tabBar'
import PokedexStackScreen from './stacks/pokedexStackScreen'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: 'Home' }}
        />
      <Tab.Screen
        name="Pokedex"
        component={PokedexStackScreen}
        options={{ header: () => (<></>) }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
