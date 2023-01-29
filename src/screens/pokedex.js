import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, StyleSheet, FlatList, TextInput, Image } from 'react-native'
import PokemonCard from '../components/pokemonCard'
import Loading from '../components/loading'
import useApi from '../hooks/useApi'
import { PokedexContext } from '../store/contexts/pokedexContext'
import { colors } from '../utils/colors'
import { useContext, useEffect } from 'react'

const POKE_API = 'https://pokeapi.co/api/v2'

const Pokedex = ({ navigation }) => {
  const [state, dispatch] = useContext(PokedexContext)
  const { data: pokemons } = useApi({
    url: `${POKE_API}/pokemon?limit=151&offset=0`
  })

  useEffect(() => {
    if (pokemons === null) return
    fillPokedexData()
  }, [pokemons])

  const gotoPokemonDetailScreen = (pokemonId, pokemonName) =>
    navigation.navigate('PokemonDetail', { pokemonId, pokemonName })

  const fillPokedexData = async () => {
    const sortedPokemons = sortPokemonsAlphabetically()
    const pokemonDetails = await requestPokemonDetails(sortedPokemons)
    const filteredPokemonDetails = pokemonDetails.map(pokemon => pokemon.value)

    dispatch({ type: 'ADD_POKEMONS_TO_POKEDEX', payload: filteredPokemonDetails })
  }

  const requestPokemonDetails = async (pokemonSliced) => {
    const response = await Promise.allSettled(pokemonSliced.map(async pokemon =>
      (await (await fetch(pokemon.url)).json())))

    return response
  }

  const sortPokemonsAlphabetically = () =>
    pokemons.sort((itm1, itm2) => itm1.name.localeCompare(itm2.name))

  const filterPokemons = name => {
    const filteredPokedex = state.pokedexMainSource.filter(pokemon =>
      pokemon.name.includes(name.toLowerCase()))

    dispatch({ type: 'SET_FILTERED_POKEMONS', payload: filteredPokedex })
  }

  const searchPokemon = name => {
    if (name) {
      filterPokemons(name)
    } else {
      dispatch({ type: 'RESET_FILTERED_POKEMONS' })
    }

    dispatch({ type: 'UPDATE_QUERY_SEARCH', payload: name })
  }

  const loadPokemonsToPokedex = () => {
    console.log("Catch'em all to watch Johto's pokemon region :B") 
  }

  const EmptyStateImage = () => (
    <View style={styles.emptyStateContainer}>
      <Image
        source={{ uri: 'https://i.pinimg.com/originals/ce/cc/91/cecc913aee77c99b18d2043dbbd8bd72.gif' }}
        style={styles.emptyStateImage}
      />
      <View style={styles.emptyStateMessageContainer}>
        <Text numberOfLines={3} style={styles.emptyStateMessage}>The "{state.querySearch}" pokemon isn't from Kanto's region</Text>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <TextInput
        style={styles.querySearch}
        onChangeText={name => searchPokemon(name)}
        placeholder="Search pokemon"
        underlineColorAndroid="transparent"
        value={state.querySearch}
      />
      {state.pokedex === null
          ? (
            <View style={styles.loadingContainer}>
              <Loading />
            </View>
          )
          : (
              <FlatList
                style={styles.pokedex}
                data={state.pokedex}
                numColumns={2}
                renderItem={(item, index) => (
                  <PokemonCard {...item} onPress={gotoPokemonDetailScreen} />
                )}
                keyExtractor={(item, index) => index}
                onEndReached={loadPokemonsToPokedex}
                ListEmptyComponent={EmptyStateImage}
              />
          )
        }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.hardBlue,
    flex: 1,
    flexGrow: 1,
    width: '100%'
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5
  },
  pokedex: {
    width: '95%'
  },
  querySearch: {
    backgroundColor: colors.yellow,
    borderRadius: 15,
    color: colors.hardBlue,
    fontWeight: 'bold',
    marginBottom: 19,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: '80%'
  },
  emptyStateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.yellow,
    borderRadius: 50,
    width: '90%',
  },
  emptyStateImage: {
    height: 250,
    marginVertical: 30,
    width: '100%'
  },
  emptyStateMessageContainer: {
    borderRadius: 20,
    backgroundColor: colors.blue,
    padding: 15,
    marginBottom: 20
  },
  emptyStateMessage: {
    color: colors.white,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default Pokedex
