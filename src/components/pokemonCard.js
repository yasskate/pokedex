import { View, Text, TouchableOpacity, Image } from "react-native"
import Loading from "./loading"

const PokemonCard = ({
  item: pokemon,
  onPress = () => {}
}) => {

  return (
    <TouchableOpacity style={{ width: '45%'}} onPress={() => onPress(pokemon.id)}>
      <View>
        <Text>{pokemon.name}</Text>
        <Image
          style={{width: 300, height: 200}}
          source={{ uri: pokemon?.sprites.front_default }}
        />
      </View>
    </TouchableOpacity>
  )
}

export default PokemonCard
