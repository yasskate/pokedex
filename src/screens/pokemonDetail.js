import { useContext, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Image, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native'
import { PokedexContext } from '../store/contexts/pokedexContext'
import { colors } from '../utils/colors'
import { capitalizeWord } from '../utils/utils'

// 5. Picture gallery

const PokemonDetail = ({ route }) => {
  const [{ pokedex, pokemon }, dispatch] = useContext(PokedexContext)
  const { pokemonId } = route.params

  useEffect(() => {
    fillPokemonDetail()

    return () => {
      dispatch({ type: 'CLEAR_POKEMON_DETAIL' })
    }
  }, [])
  
  const fillPokemonDetail = () => {
    const [selectedPokemon] = pokedex.filter(pokemon => pokemon.id === pokemonId)
    dispatch({ type: 'SET_POKEMON_DETAIL', payload: selectedPokemon })
  }

  const HeroImage = () => (
    <View style={styles.hero}>
      <Image
        style={styles.heroImage}
        source={{ uri: pokemon?.sprites?.other?.['official-artwork']?.front_default}}
      />
    </View>
  )

  const BodyDimensions = () => (
    <View style={styles.infoContainer}>
      <View style={styles.bodyDimensions}>
        <Text style={styles.bodySize}>{pokemon?.weight/10} kg</Text>
        <Text style={styles.bodySizeTitle}>Weight</Text>
      </View>
      <View style={styles.bodyDimensions}>
        <Text style={styles.bodySize}>{pokemon?.height/10} m</Text>
        <Text style={styles.bodySizeTitle}>Height</Text>
      </View>
    </View>
  )

  const Abilities = () => {
    return (
      <View style={styles.abilitiesContainer}>
        <Text style={styles.abilitiesTitle}>Abilities</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          style={styles.abilitiesScrollContainer}
        >
          {pokemon?.abilities.map(ability => (
            <View key={ability.slot} style={styles.abilityContainer}>
              <Text style={styles.abilityName}>{capitalizeWord(ability?.ability?.name)}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }

  // TODO:
  // - Fix "VirtualizedLists should never be nested on scroll view"
  const Moves = () => {
    const pokemonMoves = pokemon?.moves.map(({ move }) => move.name)
    return (
      <View style={styles.movesContainer}>
        <Text style={styles.abilitiesTitle}>Moves</Text>
          <FlatList
            horizontal={false}
            scrollEnabled={false}
            data={pokemonMoves}
            numColumns={3}
            style={{ flex: 1 }}
            renderItem={(item, index) => (
              <View key={index} style={styles.moveContainer}>
                <Text style={styles.abilityName}>{capitalizeWord(item?.item ?? '')}</Text>
              </View>
            )}
          />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}
        contentContainerStyle={styles.contentContainerStyles}
      >
        <HeroImage />
        <Text style={styles.name}>{capitalizeWord(pokemon?.name ?? '')}</Text>
        <BodyDimensions />
        <Abilities />
        <Moves />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contentContainerStyles: {
    alignItems: 'center',
    width: '100%'
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.hardBlue,
    width: '100%',
    flex: 1
  },
  hero: {
    alignItems: 'center',
    backgroundColor: colors.yellow,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    width: '100%'
  },
  heroImage: {
    height: 350,
    width: 360,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%'
  },
  name: {
    color: colors.white,
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 30
  },
  bodyDimensions: {
    alignItems: 'center'
  },
  bodySize: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold'
  },
  bodySizeTitle: {
    color: colors.hardYellow,
    fontSize: 16,
  },
  abilitiesContainer: {
    alignItems: 'center',
    marginTop: 30,
    width: '90%'
  },
  movesContainer: {
    alignItems: 'center',
    marginTop: 30,
    width: '95%'
  },
  abilitiesTitle: {
    color: colors.hardYellow,
    fontSize: 26,
    fontWeight: 'bold',
    paddingLeft: 15
  },
  abilitiesScrollContainer: {
    marginTop: 10
  },
  abilityContainer: {
    backgroundColor: colors.yellow,
    justifyContent: 'center',
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 30
  },
  moveContainer: {
    backgroundColor: colors.yellow,
    justifyContent: 'center',
    paddingHorizontal: 8,
    margin: 10,
    borderRadius: 30
  },
  abilityName: {
    color: colors.hardBlue,
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default PokemonDetail
