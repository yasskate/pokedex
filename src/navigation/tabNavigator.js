import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/home'
import TabBar from '../components/tabBar'
import PokedexStackScreen from './stacks/pokedexStackScreen'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      tabBar={props => <TabBar {...props} />}
      options={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => (<></>)
        }}
        />
      <Tab.Screen
        name="Pokedex"
        component={PokedexStackScreen}
        options={{
          header: () => (<></>)
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
