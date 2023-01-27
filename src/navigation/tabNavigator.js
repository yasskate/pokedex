import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, StyleSheet } from 'react-native'
import Home from '../screens/home'
import TabBar from '../components/tabBar'
import PokedexStackScreen from './stacks/pokedexStackScreen'
import { colors } from '../utils/colors'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <View style={styles.tabContainer}>
      <Tab.Navigator
        tabBar={props => (<TabBar {...props} />)}
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
    </View>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: colors.hardBlue,
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 12
  }
})

export default TabNavigator
