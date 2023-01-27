import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, View, Text, StyleSheet, FlatList, TextInput } from 'react-native'
import PokemonCard from '../components/pokemonCard'
import Loading from '../components/loading'
import useApi from '../hooks/useApi'
import { PokedexContext } from '../store/contexts/pokedexContext'
import { colors } from '../utils/colors'
import { useContext, useEffect } from 'react'

const POKE_API = 'https://pokeapi.co/api/v2'

const Pokedex = ({ navigation }) => {
  const [state, dispatch] = useContext(PokedexContext)
  const { loading, data: pokemons } = useApi({
    url: `${POKE_API}/pokemon?limit=151&offset=0`
  })

  useEffect(() => {
    if (pokemons === null) return
    fillPokedexData()
  }, [pokemons])

  const gotoPokemonDetailScreen = (pokemonId) =>
  navigation.navigate('PokemonDetail', { pokemonId })

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
    dispatch({ type: 'UPDATE_QUERY_SEARCH', payload: filteredPokedex })
  }

  const searchPokemon = name => {
    if (name) {
      filterPokemons(name)
    } else {
      dispatch({ type: 'RESET_FILTERED_POKEMONS' })
    }
  }

  const loadPokemonsToPokedex = () => {
    console.log("Catch'em all to watch Johto's pokemon region :B") 
  }

  if (loading && state?.pokedex === null) {
    return <Loading />
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        style={styles.querySearch}
        onChangeText={name => searchPokemon(name)}
        placeholder="Call your pokemon!"
        underlineColorAndroid="transparent"
        value={state.querySearch}
      />
      <FlatList
        style={styles.pokedex}
        data={state.pokedex}
        numColumns={2}
        renderItem={(item, index) => (
          <PokemonCard {...item} onPress={gotoPokemonDetailScreen} />
        )}
        keyExtractor={(item, index) => index}
        onEndReached={loadPokemonsToPokedex}
      />
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
  pokedex: {
    width: '95%'
  },
  querySearch: {
    backgroundColor: colors.hardYellow,
    borderRadius: 15,
    color: colors.hardBlue,
    fontWeight: 'bold',
    marginBottom: 19,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: '80%'
  }
})

export default Pokedex
