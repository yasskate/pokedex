import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, View, Text, StyleSheet, FlatList } from 'react-native'
import PokemonCard from '../components/pokemonCard'
import Loading from '../components/loading'
import useApi from '../hooks/useApi'
import { PokedexContext } from '../store/contexts/pokedexContext'
import { colors } from '../utils/colors'
import { useContext } from 'react'

const POKE_API = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'

const Pokedex = ({ navigation }) => {
  const [state, dispatch] = useContext(PokedexContext)
  const { loading, data } = useApi({ url: POKE_API })

  const gotoPokemonDetailScreen = () =>
    navigation.navigate('PokemonDetail')

  if (loading && data === null) {
    return <Loading />
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text>STATE CONTEXT ----== {state.counter}</Text>
      <Button
        title="Increase context by 1"
        onPress={() => dispatch({ type: 'INCREASE_BY_ONE' })}
      />
      <FlatList
        style={styles.pokemonList}
        data={data.results}
        numColumns={2}
        renderItem={(item, index) => <PokemonCard {...item} />}
        keyExtractor={(item, index) => index}
      />

      <Button
        title="Go to Pokemon Detail Screen"
        onPress={gotoPokemonDetailScreen}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    height: '100%',
    flexGrow: 1,
    backgroundColor: colors.hardYellow,
  },
  pokemonList: {
    backgroundColor: colors.blue 
  }
});

export default Pokedex
