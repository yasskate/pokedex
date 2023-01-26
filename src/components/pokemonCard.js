import { View, Text, TouchableOpacity, Image } from "react-native"

const PokemonCard = ({ item: pokemon }) => {
  return (
    <TouchableOpacity style={{ width: '45%'}} >
      <View>
        <Text>{pokemon.name}</Text>
        <Image
          style={{width: 300, height: 200}}
          // source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" }}
          source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" }}
        />
      </View>
    </TouchableOpacity>
  )
}

export default PokemonCard
