import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { colors } from '../utils/colors'

const TabBar = ({ state, descriptors, navigation }) => {
  const getLabel = (route, options) =>
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
        ? options.title
        : route.name;


  const getUri = tabLabel => {
    return tabLabel === 'Home'
      ? 'https://cdn-icons-png.flaticon.com/128/1033/1033013.png'
      : 'https://i.pinimg.com/originals/05/8c/c1/058cc1913cf7d2bd93d6153ad22205f5.png'
  }

  return (
    <SafeAreaView style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = getLabel(route, options)
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
            <View style={styles.tabContainer}>
              {isFocused && (
                <Image
                  source={{ uri: getUri(label) }}
                  style={{  width: 20, height: 25 }}
                />
              )}
              <Text style={styles.tabTitle(isFocused)}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        )
      })}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: colors.hardBlue,
    width: '100%',
  },
  tabContainer: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    flexGrow: 1,
    marginVertical: 10,
    paddingVertical: 5,
    width: '70%'
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    width: '100%'
  },
  tabTitle: isFocused => ({
    color: isFocused ? colors.hardYellow : colors.white,
    fontSize: isFocused ? 20 : 16,
    fontWeight: isFocused ? 'bold' : 'normal'
  }),

})

export default TabBar
