import { StatusBar } from 'expo-status-bar'
import { Button, Text, View } from 'react-native'
import { colors } from '../utils/colors'

const Pokedex = ({ navigation }) => {
  const gotoPokemonDetailScreen = () =>
    navigation.navigate('PokemonDetail')

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: colors.hardBlue,
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <StatusBar style="auto" />
      <Text>POKEDEX!</Text>
      <Button
        title="Go to Pokemon Detail Screen"
        onPress={gotoPokemonDetailScreen}
      />
    </View>
  )
}

export default Pokedex
