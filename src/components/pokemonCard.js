import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { capitalizeWord } from "../utils/utils"
import { colors } from "../utils/colors"

const PokemonCard = ({
  item: pokemon,
  onPress = () => {}
}) => {

  const PokemonTypes = () => {
    const types = pokemon.types.map(type => type.type.name)

    return types.map((type, index) => (
      <Text key={index} style={styles.type}>{capitalizeWord(type)}</Text>
    ))
  }

  return (
    <TouchableOpacity
      key={pokemon.id}
      style={styles.touchableContainer}
      onPress={() => onPress(pokemon.id)}
    >
      <View style={styles.container}>
        <Image
          style={styles.pokemonImage}
          source={{ uri: pokemon?.sprites.front_default }}
        />
        <Text style={styles.pokemonName}>{capitalizeWord(pokemon.name)}</Text>
        <View style={styles.types}>
          <PokemonTypes />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableContainer: {
    marginVertical: 8,
    marginHorizontal: 12,
    width: '45%'
  },
  container: {
    backgroundColor: colors.hardYellow,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 12
  },
  pokemonImage: {
    width: 150,
    height: 120
  },
  pokemonName: {
    color: colors.hardBlue,
    fontSize: 24,
    fontWeight: 'bold'
  },
  types: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%'
  },
  type: {
    backgroundColor: colors.hardBlue,
    borderRadius: 8,
    color: colors.white,
    fontSize: 12,
    padding: 5
  }
})

export default PokemonCard
