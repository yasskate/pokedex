import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../utils/colors'

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{
      flexDirection: 'row',
      backgroundColor: colors.blue,
      height:50,
      borderRadius:50,
      justifyContent:"center",
      alignItems:"center"
      }}>

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
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems:"center" }}
          >
            <Text style={{ color: isFocused ? colors.hardYellow : colors.hardBlue }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

export default TabBar
