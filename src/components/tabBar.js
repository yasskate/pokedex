import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../utils/colors'

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tab}
          >
            <Text style={styles.tabTitle(isFocused)}>
              {label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.blue,
    borderRadius: 50,
    flexDirection: 'row',
    marginVertical: 20,
    height: 60,
    width: '90%'
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    width: '100%'
  },
  tabTitle: isFocused => ({
    color: isFocused ? colors.hardYellow : colors.white,
    fontSize: 16,
    fontWeight: isFocused ? 'bold' : 'normal'
  }),

})

export default TabBar
